"""
Memory ingestion preprocessing pipeline.

Stages
------
1. clean_text   – normalise raw input (HTML, whitespace, unicode)
2. chunk_text   – sliding-window word-level chunking
3. embed_chunks – generate dense vector embeddings (sentence-transformers)

All stages are synchronous; they are called from the FastAPI request handler
*before* the Celery task is dispatched so that the heavy work (embedding) is
done once and the serialised result is passed to the worker.
"""

from __future__ import annotations

import html
import logging
import re
import unicodedata
from typing import List, Optional

logger = logging.getLogger(__name__)

# ── Lazy model singleton ──────────────────────────────────────────────────────
# Loaded on first call to embed_chunks(); avoids paying startup cost on import.

_encoder = None  # type: ignore[annotation]


def _get_encoder():
    """Lazily load and cache the SentenceTransformer model."""
    global _encoder
    if _encoder is None:
        from sentence_transformers import SentenceTransformer  # noqa: PLC0415
        from app.core.config import settings  # noqa: PLC0415

        logger.info("Loading embedding model: %s", settings.EMBEDDING_MODEL)
        _encoder = SentenceTransformer(settings.EMBEDDING_MODEL)
    return _encoder


# ── Stage 1: Text Cleaning ────────────────────────────────────────────────────


def clean_text(text: str) -> str:
    """Return a normalised, whitespace-collapsed plain-text string.

    Pipeline:
    - Decode HTML entities  (``&amp;`` → ``&``)
    - Strip HTML / XML tags
    - Normalise unicode to NFC
    - Replace non-breaking spaces and control characters with regular spaces
    - Collapse consecutive whitespace
    - Strip leading/trailing whitespace
    """
    # 1. Unescape HTML entities
    text = html.unescape(text)

    # 2. Remove HTML tags
    text = re.sub(r"<[^>]+>", " ", text)

    # 3. Unicode normalise (NFC)
    text = unicodedata.normalize("NFC", text)

    # 4. Replace non-printing / control characters with space
    text = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]", " ", text)

    # 5. Collapse whitespace
    text = re.sub(r"\s+", " ", text).strip()

    return text


# ── Stage 2: Chunking ─────────────────────────────────────────────────────────


def chunk_text(
    text: str,
    chunk_size: Optional[int] = None,
    chunk_overlap: Optional[int] = None,
) -> List[str]:
    """Split *text* into overlapping word-level chunks.

    Parameters
    ----------
    text:         Cleaned input text.
    chunk_size:   Maximum number of words per chunk. Falls back to
                  ``settings.CHUNK_SIZE``.
    chunk_overlap:Number of words shared between consecutive chunks. Falls
                  back to ``settings.CHUNK_OVERLAP``.

    Returns
    -------
    List of non-empty chunk strings.  If *text* is shorter than *chunk_size*
    a single-element list is returned.
    """
    from app.core.config import settings  # noqa: PLC0415

    size = chunk_size if chunk_size is not None else settings.CHUNK_SIZE
    overlap = chunk_overlap if chunk_overlap is not None else settings.CHUNK_OVERLAP

    if overlap >= size:
        raise ValueError(f"chunk_overlap ({overlap}) must be less than chunk_size ({size})")

    words = text.split()
    if not words:
        return []

    chunks: List[str] = []
    start = 0
    step = size - overlap

    while start < len(words):
        end = min(start + size, len(words))
        chunk = " ".join(words[start:end])
        if chunk:
            chunks.append(chunk)
        if end == len(words):
            break
        start += step

    return chunks


# ── Stage 3: Embedding ────────────────────────────────────────────────────────


def embed_chunks(chunks: List[str]) -> List[List[float]]:
    """Return a list of dense float vectors, one per chunk.

    Uses the lazily loaded SentenceTransformer model (``EMBEDDING_MODEL``).
    Batches all chunks in a single ``encode()`` call for efficiency.

    Returns
    -------
    ``List[List[float]]`` — same length and order as *chunks*.
    """
    if not chunks:
        return []

    encoder = _get_encoder()
    # ``show_progress_bar=False`` keeps logs clean in production
    embeddings = encoder.encode(chunks, show_progress_bar=False, convert_to_numpy=True)
    return [vec.tolist() for vec in embeddings]


# ── Convenience: run all three stages ─────────────────────────────────────────


def run_pipeline(raw_text: str) -> tuple[str, List[str], List[List[float]]]:
    """Execute clean → chunk → embed and return all three artefacts.

    Returns
    -------
    cleaned   : str                   – normalised text
    chunks    : List[str]             – text chunks
    embeddings: List[List[float]]     – one vector per chunk
    """
    cleaned = clean_text(raw_text)
    chunks = chunk_text(cleaned)
    embeddings = embed_chunks(chunks)
    logger.debug(
        "Pipeline complete: %d char(s) → %d chunk(s) → %d vector(s)",
        len(cleaned),
        len(chunks),
        len(embeddings),
    )
    return cleaned, chunks, embeddings
