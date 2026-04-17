"""
Qdrant vector store client — lazy singleton + collection bootstrap.

Usage
-----
    from app.db.qdrant import get_qdrant_client, ensure_collection, upsert_vectors
"""

from __future__ import annotations

import logging
from typing import Any, Dict, List, Optional

from qdrant_client import QdrantClient
from qdrant_client.http.models import (
    Distance,
    PointStruct,
    VectorParams,
)

from app.core.config import settings

logger = logging.getLogger(__name__)

# Module-level singleton — initialised lazily on first call
_client: Optional[QdrantClient] = None


def get_qdrant_client() -> QdrantClient:
    """Return (or lazily create) the shared QdrantClient instance."""
    global _client
    if _client is None:
        logger.info("Connecting to Qdrant at %s", settings.QDRANT_URL)
        _client = QdrantClient(url=settings.QDRANT_URL, timeout=10)
    return _client


def ensure_collection(
    collection_name: str = settings.QDRANT_COLLECTION,
    vector_size: int = settings.EMBEDDING_DIM,
) -> None:
    """Create the Qdrant collection if it does not already exist.

    Called once during application startup via the lifespan hook.
    """
    client = get_qdrant_client()
    existing = {c.name for c in client.get_collections().collections}
    if collection_name not in existing:
        client.create_collection(
            collection_name=collection_name,
            vectors_config=VectorParams(size=vector_size, distance=Distance.COSINE),
        )
        logger.info(
            "Created Qdrant collection '%s' (dim=%d, metric=cosine)",
            collection_name,
            vector_size,
        )
    else:
        logger.debug("Qdrant collection '%s' already exists — skipping create.", collection_name)


def upsert_vectors(
    points: List[PointStruct],
    collection_name: str = settings.QDRANT_COLLECTION,
) -> None:
    """Upsert a batch of vector points into the target collection.

    Parameters
    ----------
    points:
        List of ``PointStruct`` objects.  Each must carry an ``id``, a
        ``vector`` (list[float]), and an optional ``payload`` dict.
    collection_name:
        Target Qdrant collection (defaults to ``settings.QDRANT_COLLECTION``).
    """
    client = get_qdrant_client()
    client.upsert(collection_name=collection_name, points=points, wait=True)
    logger.debug("Upserted %d vector(s) into '%s'.", len(points), collection_name)
