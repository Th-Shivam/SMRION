"""
Search Service

Handles hybrid memory retrieval (Qdrant semantic vector + PostgreSQL keyword),
merges results, ranks them via a composite formula weighting Memory `final_score`,
and applies updates to `access_count`.
"""

from __future__ import annotations

import time
import uuid
import logging
from typing import Dict, List
from datetime import datetime, timezone

from sqlalchemy import select, or_
from sqlalchemy.ext.asyncio import AsyncSession
from qdrant_client.http.models import Filter, FieldCondition, MatchValue

from app.core.config import settings
from app.db.qdrant import get_qdrant_client
from app.models.memory import Memory
from app.schemas.search import MemorySearchResultItem, MemorySearchResponse
from app.schemas.memory import MemoryRead
from app.services.pipeline import embed_chunks
from app.services.scoring import score_memory


logger = logging.getLogger(__name__)


class SearchService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.q_client = get_qdrant_client()

    async def search(self, user_id: str, query: str, limit: int = 10) -> MemorySearchResponse:
        start_time = time.perf_counter()
        
        # ── 1. Vector Search (Qdrant) ───────────────────────────────────────────
        # Note: pipeline.embed_chunks expects a list of chunks. We send just the query.
        query_vector = embed_chunks([query])[0]
        
        user_filter = Filter(
            must=[
                FieldCondition(
                    key="user_id",
                    match=MatchValue(value=user_id),
                )
            ]
        )
        
        # Pull slightly more candidates to rerank
        qdrant_results = self.q_client.search(
            collection_name=settings.QDRANT_COLLECTION,
            query_vector=query_vector,
            query_filter=user_filter,
            limit=limit * 2,
            with_payload=True,
        )
        
        # De-duplicate memory_ids since chunks represent the same memory
        vector_candidates: Dict[str, float] = {}
        for point in qdrant_results:
            mem_id = str(point.payload.get("memory_id"))
            # Keep highest similarity score for that memory if multiple chunks matched
            if mem_id not in vector_candidates or point.score > vector_candidates[mem_id]:
                vector_candidates[mem_id] = point.score

        # ── 2. Keyword Fallback (PostgreSQL) ──────────────────────────────────
        # Extract basic alphanumeric words for ILIKE bounds
        words = [w for w in query.split() if w.isalnum()]
        keyword_candidates = []
        if set(words):
            conditions = [Memory.content.ilike(f"%{w}%") for w in words]
            keyword_stmt = (
                select(Memory)
                .where(Memory.user_id == user_id, Memory.deleted_at.is_(None))
                .where(or_(*conditions))
                .limit(limit * 2)
            )
            keyword_rows = (await self.db.execute(keyword_stmt)).scalars().all()
            keyword_candidates = list(keyword_rows)

        # ── 3. Merge & Fetch Models  ──────────────────────────────────────────
        # Gather all unique IDs
        all_ids = set()
        for mem_id in vector_candidates.keys():
            all_ids.add(uuid.UUID(mem_id))
        for mem in keyword_candidates:
            all_ids.add(mem.id)

        # Fetch models dynamically (for vector matches not in keyword pull)
        memory_map: Dict[uuid.UUID, Memory] = {m.id: m for m in keyword_candidates}
        missing_ids = all_ids - set(memory_map.keys())
        
        if missing_ids:
            missing_stmt = select(Memory).where(Memory.id.in_(missing_ids), Memory.deleted_at.is_(None))
            missing_rows = (await self.db.execute(missing_stmt)).scalars().all()
            for m in missing_rows:
                memory_map[m.id] = m

        # ── 4. Ranking ────────────────────────────────────────────────────────
        results = []
        now = datetime.now(timezone.utc)
        
        for mem_id, memory in memory_map.items():
            # Vector Score
            v_score = vector_candidates.get(str(mem_id), 0.0)
            
            # Simulated Keyword Match Score (basic heuristics based on word counts)
            k_score = 0.0
            if words:
                matches = sum(1 for w in words if w.lower() in memory.content.lower())
                k_score = matches / len(words)
                
            base_score = max(v_score, k_score)
            
            # Combine retrieved strength (0.6) with the Memory system's internal value (0.4)
            combined_score = (base_score * 0.6) + (memory.final_score * 0.4)
            
            item = MemorySearchResultItem(
                memory=MemoryRead.model_validate(memory),
                vector_similarity=v_score,
                keyword_score=k_score,
                combined_score=combined_score
            )
            results.append((combined_score, item, memory))
            
        # Sort descending by CombinedScore
        results.sort(key=lambda x: x[0], reverse=True)
        top_results = results[:limit]
        
        # ── 5. Feedback Loop (Mark accessed) ──────────────────────────────────
        final_items = []
        for _, item, mem in top_results:
            mem.access_count += 1
            mem.last_accessed_at = now
            # Recalculate and update the integrated scoring dynamically representing real time changes
            score_memory(mem)
            self.db.add(mem)
            # Add to response wrapper
            final_items.append(item)
            
        await self.db.flush()

        elapsed_ms = (time.perf_counter() - start_time) * 1000

        return MemorySearchResponse(
            items=final_items,
            total_found=len(final_items),
            query_time_ms=elapsed_ms
        )
