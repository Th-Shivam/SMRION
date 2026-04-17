"""
Celery tasks for the SMRION ingestion pipeline.

Task: ingest_memory_task
------------------------
Receives pre-computed chunks and their embeddings from the FastAPI handler,
upserts them into Qdrant, then flips the memory's processing_status to
'done' (or 'failed' on error) in PostgreSQL.

The task is deliberately *not* async (Celery runs in its own sync process);
database writes use a synchronous SQLAlchemy session.
"""

from __future__ import annotations

import json
import logging
import uuid
from typing import Any, Dict, List

from celery import Task
from sqlalchemy import create_engine
from sqlalchemy.orm import Session

from app.core.config import settings
from app.db.qdrant import ensure_collection, upsert_vectors
from app.worker.celery_app import celery_app

logger = logging.getLogger(__name__)

# ── Sync SQLAlchemy engine (used only inside this Celery worker process) ──────
# We create a dedicated sync engine so the worker never touches async event loops.
_sync_engine = create_engine(settings.DATABASE_URL_SYNC, pool_pre_ping=True)


def _set_status(memory_id: str, status: str) -> None:
    """Update processing_status for a memory row using a short-lived sync session."""
    from app.models.memory import Memory  # noqa: PLC0415 (avoid circular at module load)

    with Session(_sync_engine) as session:
        memory = session.get(Memory, uuid.UUID(memory_id))
        if memory:
            memory.processing_status = status
            session.commit()


# ── Task definition ───────────────────────────────────────────────────────────


@celery_app.task(
    bind=True,
    name="smrion.ingest_memory",
    max_retries=3,
    default_retry_delay=10,  # seconds before first retry
    autoretry_for=(Exception,),
    retry_backoff=True,
)
def ingest_memory_task(
    self: Task,
    memory_id: str,
    user_id: str,
    chunks: List[str],
    embeddings: List[List[float]],
    metadata: Dict[str, Any],
) -> Dict[str, Any]:
    """Upsert embeddings into Qdrant and mark the memory record as 'done'.

    Parameters
    ----------
    memory_id:  UUID string of the PostgreSQL memory record.
    user_id:    Owner of the memory (stored in Qdrant payload for filtering).
    chunks:     Pre-computed text chunks from the pipeline.
    embeddings: Parallel list of float vectors, one per chunk.
    metadata:   Caller-supplied metadata dict passed through to Qdrant payload.

    Returns
    -------
    dict with ``memory_id``, ``chunk_count``, and final ``status``.
    """
    logger.info(
        "[ingest_memory_task] START memory_id=%s user=%s chunks=%d",
        memory_id,
        user_id,
        len(chunks),
    )

    try:
        # ── 1. Mark as processing ─────────────────────────────────────────────
        _set_status(memory_id, "processing")

        # ── 2. Ensure the Qdrant collection exists ────────────────────────────
        ensure_collection()

        # ── 3. Build PointStructs and upsert ─────────────────────────────────
        from qdrant_client.http.models import PointStruct  # noqa: PLC0415

        points = [
            PointStruct(
                id=str(uuid.uuid5(uuid.UUID(memory_id), str(chunk_index))),
                vector=embedding,
                payload={
                    "memory_id": memory_id,
                    "user_id": user_id,
                    "chunk_index": chunk_index,
                    "chunk_text": chunk,
                    "metadata": metadata,
                },
            )
            for chunk_index, (chunk, embedding) in enumerate(zip(chunks, embeddings))
        ]

        upsert_vectors(points)
        logger.info(
            "[ingest_memory_task] Upserted %d vector(s) for memory_id=%s",
            len(points),
            memory_id,
        )

        # ── 4. Mark as done ───────────────────────────────────────────────────
        _set_status(memory_id, "done")

        return {"memory_id": memory_id, "chunk_count": len(chunks), "status": "done"}

    except Exception as exc:
        logger.exception(
            "[ingest_memory_task] FAILED memory_id=%s error=%s", memory_id, exc
        )
        _set_status(memory_id, "failed")
        raise  # re-raise so Celery can apply retry logic
