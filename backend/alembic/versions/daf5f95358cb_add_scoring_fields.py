"""add_scoring_fields

Revision ID: daf5f95358cb
Revises: c0b29984483f
Create Date: 2026-04-17 23:30:14.541314

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'daf5f95358cb'
down_revision: Union[str, None] = 'c0b29984483f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column("memories", sa.Column("access_count", sa.Integer(), nullable=False, server_default="0"))
    op.add_column("memories", sa.Column("last_accessed_at", sa.DateTime(timezone=True), nullable=True))
    op.add_column("memories", sa.Column("final_score", sa.Float(), nullable=False, server_default="0.0"))

def downgrade() -> None:
    op.drop_column("memories", "final_score")
    op.drop_column("memories", "last_accessed_at")
    op.drop_column("memories", "access_count")
