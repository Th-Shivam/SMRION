"""
IngestionService — orchestrates the full memory ingestion flow.

1. Run preprocessing pipeline  (clean → chunk → embed)
2. Persist raw memory in PostgreSQL (status = 'pending')
3. Dispatch Celery task          (fire-and-forget)
4. Return MemoryIngestResponse   (status = 'queued')
"""

from __future__ import annotations

import json
import logging

from sqlalchemy.ext.asyncio import AsyncSession

from app.models.memory import Memory
from app.schemas.ingestion import MemoryIngestRequest, MemoryIngestResponse
from app.services.pipeline import run_pipeline
from app.worker.tasks import ingest_memory_task

logger = logging.getLogger(__name__)


class IngestionService:
    """Business-logic layer for POST /memory/add."""

    def __init__(self, db: AsyncSession) -> None:
        self.db = db

    async def ingest(self, payload: MemoryIngestRequest) -> MemoryIngestResponse:
        """Run the full ingestion flow and return immediately with a memory_id."""

        # ── Stage 1: Preprocessing pipeline ──────────────────────────────────
        logger.info(
            "[IngestionService] Starting pipeline for user=%s content_len=%d",
            payload.user_id,
            len(payload.content),
        )
        cleaned, chunks, embeddings = run_pipeline(payload.content)

        # ── Stage 2: Persist in PostgreSQL ────────────────────────────────────
        memory = Memory(
            user_id=payload.user_id,
            # Keep backward-compat with existing title/content columns
            title=f"Memory [{payload.user_id}]",
            content=cleaned,
            raw_chunks=json.dumps(chunks),
            importance_score=0.5,          # placeholder — future ranker fills this
            processing_status="pending",
            ingestion_metadata=json.dumps(payload.metadata),
        )
        self.db.add(memory)
        await self.db.flush()   # assign memory.id without committing
        await self.db.refresh(memory)

        logger.info(
            "[IngestionService] Persisted memory id=%s chunks=%d",
            memory.id,
            len(chunks),
        )

        # ── Stage 3: Dispatch Celery task (async, fire-and-forget) ────────────
        ingest_memory_task.delay(
            str(memory.id),
            payload.user_id,
            chunks,
            embeddings,
            payload.metadata,
        )
        logger.info("[IngestionService] Task queued for memory id=%s", memory.id)

        # ── Stage 4: Return immediately with 'queued' status ──────────────────
        return MemoryIngestResponse(
            memory_id=memory.id,
            status="queued",
            chunk_count=len(chunks),
            created_at=memory.created_at,
        )
