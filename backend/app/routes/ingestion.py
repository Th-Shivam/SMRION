"""
Ingestion router – POST /api/v1/memory/add

Accepts raw user content, runs the preprocessing pipeline synchronously,
persists the memory in PostgreSQL, and dispatches a Celery task for
embedding upsert into Qdrant.  Returns 202 Accepted with the memory_id.
"""

from __future__ import annotations

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.schemas.ingestion import MemoryIngestRequest, MemoryIngestResponse
from app.services.ingestion_service import IngestionService

router = APIRouter(prefix="/memory", tags=["Memory Ingestion"])


def _get_ingestion_service(db: AsyncSession = Depends(get_db)) -> IngestionService:
    return IngestionService(db)


@router.post(
    "/add",
    response_model=MemoryIngestResponse,
    status_code=status.HTTP_202_ACCEPTED,
    summary="Ingest a new memory",
    description=(
        "Accepts raw text content for a given user, runs the preprocessing "
        "pipeline (clean → chunk → embed), stores the raw memory record in "
        "PostgreSQL, and asynchronously upserts the embedding vectors into "
        "Qdrant via a Celery task.  Returns the `memory_id` immediately."
    ),
    responses={
        202: {"description": "Memory accepted and queued for embedding ingestion."},
        422: {"description": "Validation error in request payload."},
    },
)
async def add_memory(
    payload: MemoryIngestRequest,
    svc: IngestionService = Depends(_get_ingestion_service),
) -> MemoryIngestResponse:
    """
    **POST /memory/add**

    | Field       | Type   | Required | Notes                                 |
    |-------------|--------|----------|---------------------------------------|
    | user_id     | string | ✅       | Owner identifier (max 128 chars)      |
    | content     | string | ✅       | Raw text to ingest (min 1 char)       |
    | metadata    | object | ❌       | Arbitrary key-value pairs             |

    Returns `memory_id`, `status` (`queued`), `chunk_count`, and `created_at`.
    """
    return await svc.ingest(payload)
