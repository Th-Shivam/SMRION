"""
Schemas for Memory Retrieval API
"""

from __future__ import annotations

import uuid
from typing import Optional, List, Dict, Any
from pydantic import BaseModel, Field

from app.schemas.memory import MemoryRead


class MemorySearchResultItem(BaseModel):
    """
    Combines the core Memory model with real-time semantic scoring ranking
    """
    memory: MemoryRead
    vector_similarity: float = Field(0.0, description="Cosine similarity score out of Qdrant")
    keyword_score: float = Field(0.0, description="PostgreSQL ranking similarity out of 1.0")
    combined_score: float = Field(0.0, description="Blended evaluation weight including Memory final_score")

    # Qdrant optionally returns chunk index matching for context tracking
    matched_chunk: Optional[str] = None


class MemorySearchResponse(BaseModel):
    items: List[MemorySearchResultItem]
    total_found: int
    query_time_ms: float
