"""
Memory ORM model – core entity for SMRION's AI memory system.
"""

from sqlalchemy import ForeignKey, String, Text
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

    # Embedding vector reference (stored externally, e.g. pgvector or Pinecone)
    embedding_id: Mapped[str | None] = mapped_column(String(256), nullable=True)

    def __repr__(self) -> str:
        return f"<Memory id={self.id} title={self.title!r} user={self.user_id!r}>"
