"""
Memory ORM model – core entity for SMRION's AI memory system.
"""

from datetime import datetime
from sqlalchemy import Float, String, Text, Integer, DateTime
from sqlalchemy.orm import Mapped, mapped_column

from app.db.session import Base
from app.models.base import SoftDeleteMixin, TimestampMixin, UUIDMixin


class Memory(Base, UUIDMixin, TimestampMixin, SoftDeleteMixin):
    """Represents a single memory unit stored in SMRION."""

    __tablename__ = "memories"

    # Owner – will link to a User model once auth is in place
    user_id: Mapped[str] = mapped_column(String(128), nullable=False, index=True)

    # Content
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)

    # Optional semantic tags / category for retrieval
    category: Mapped[str | None] = mapped_column(String(64), nullable=True)
    tags: Mapped[str | None] = mapped_column(Text, nullable=True)  # comma-separated

    # Embedding vector reference (stored externally in Qdrant)
    embedding_id: Mapped[str | None] = mapped_column(String(256), nullable=True)

    # ── Ingestion pipeline fields ─────────────────────────────────────────────

    # JSON-serialised list of text chunks produced by the pipeline
    raw_chunks: Mapped[str | None] = mapped_column(Text, nullable=True)

    # Placeholder importance score (0.0 – 1.0); future ranker will fill this
    importance_score: Mapped[float] = mapped_column(
        Float, nullable=False, default=0.5
    )

    # Async processing lifecycle: pending → processing → done | failed
    processing_status: Mapped[str] = mapped_column(
        String(32), nullable=False, default="pending", index=True
    )

    # Caller-supplied JSON metadata blob
    ingestion_metadata: Mapped[str | None] = mapped_column(Text, nullable=True)

    # ── Scoring Engine ────────────────────────────────────────────────────────
    
    access_count: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    
    last_accessed_at: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True),
        nullable=True,
        default=None,
    )
    
    final_score: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)

    def __repr__(self) -> str:
        return f"<Memory id={self.id} user={self.user_id!r} status={self.processing_status!r}>"
