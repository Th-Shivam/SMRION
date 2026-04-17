"""add_ingestion_fields

Revision ID: c0b29984483f
Revises: 
Create Date: 2026-04-17 23:15:41.681963

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'c0b29984483f'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column("memories", sa.Column("raw_chunks", sa.Text(), nullable=True))
    op.add_column("memories", sa.Column("importance_score", sa.Float(), nullable=False, server_default="0.5"))
    op.add_column("memories", sa.Column("processing_status", sa.String(length=32), nullable=False, server_default="'pending'"))
    op.add_column("memories", sa.Column("ingestion_metadata", sa.Text(), nullable=True))
    
    op.create_index(op.f("ix_memories_processing_status"), "memories", ["processing_status"], unique=False)


def downgrade() -> None:
    op.drop_index(op.f("ix_memories_processing_status"), table_name="memories")
    op.drop_column("memories", "ingestion_metadata")
    op.drop_column("memories", "processing_status")
    op.drop_column("memories", "importance_score")
    op.drop_column("memories", "raw_chunks")
