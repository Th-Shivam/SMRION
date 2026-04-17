"""
Pydantic schemas for the Memory Ingestion API.

POST /api/v1/memory/add
  ← MemoryIngestRequest
  → MemoryIngestResponse
"""

from __future__ import annotations

import uuid
from datetime import datetime
from typing import Any, Dict

from pydantic import BaseModel, Field


class MemoryIngestRequest(BaseModel):
    """Payload accepted by POST /memory/add."""

    user_id: str = Field(
        ...,
        min_length=1,
        max_length=128,
        description="Identifier of the user this memory belongs to.",
        examples=["user-abc-123"],
    )
    content: str = Field(
        ...,
        min_length=1,
        description="Raw text content to be ingested and embedded.",
        examples=["Attended the quarterly all-hands meeting. Key takeaway: focus on retention."],
    )
    metadata: Dict[str, Any] = Field(
        default_factory=dict,
        description="Arbitrary caller-supplied metadata (source, tags, session_id, …).",
        examples=[{"source": "slack", "channel": "#product"}],
    )


class MemoryIngestResponse(BaseModel):
    """Returned immediately after a memory record is persisted."""

    memory_id: uuid.UUID = Field(
        ...,
        description="Stable UUID of the newly created memory record.",
    )
    status: str = Field(
        ...,
        description="Lifecycle status of the ingestion pipeline. Initially 'queued'.",
        examples=["queued"],
    )
    chunk_count: int = Field(
        ...,
        description="Number of text chunks that were produced by the pipeline.",
    )
    created_at: datetime = Field(
        ...,
        description="UTC timestamp when the memory record was created.",
    )
