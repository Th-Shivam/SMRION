"""
MemoryService – business logic layer for memory CRUD and caching.
"""

import uuid
from typing import Optional

from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.redis import cache_delete, cache_get, cache_set
from app.models.memory import Memory
from app.schemas.memory import MemoryCreate, MemoryListResponse, MemoryRead, MemoryUpdate

CACHE_PREFIX = "memory:"
CACHE_LIST_PREFIX = "memory:list:"


class MemoryService:
    def __init__(self, db: AsyncSession):
        self.db = db

    # ── Create ────────────────────────────────────────────────────────────────

    async def create(self, user_id: str, payload: MemoryCreate) -> MemoryRead:
        memory = Memory(user_id=user_id, **payload.model_dump())
        self.db.add(memory)
        await self.db.flush()
        await self.db.refresh(memory)
        result = MemoryRead.model_validate(memory)
        # cache individual item
        await cache_set(f"{CACHE_PREFIX}{memory.id}", result.model_dump(mode="json"))
        return result

    # ── Read ──────────────────────────────────────────────────────────────────

    async def get(self, memory_id: uuid.UUID) -> Optional[MemoryRead]:
        cached = await cache_get(f"{CACHE_PREFIX}{memory_id}")
        if cached:
            return MemoryRead(**cached)

        memory = await self.db.get(Memory, memory_id)
        if memory is None or memory.deleted_at is not None:
            return None
        result = MemoryRead.model_validate(memory)
        await cache_set(f"{CACHE_PREFIX}{memory_id}", result.model_dump(mode="json"))
        return result

    async def list(
        self,
        user_id: str,
        skip: int = 0,
        limit: int = 20,
    ) -> MemoryListResponse:
        stmt = (
            select(Memory)
            .where(Memory.user_id == user_id, Memory.deleted_at.is_(None))
            .offset(skip)
            .limit(limit)
            .order_by(Memory.created_at.desc())
        )
        count_stmt = select(func.count()).select_from(Memory).where(
            Memory.user_id == user_id, Memory.deleted_at.is_(None)
        )

        rows = (await self.db.execute(stmt)).scalars().all()
        total = (await self.db.execute(count_stmt)).scalar_one()
        items = [MemoryRead.model_validate(r) for r in rows]
        return MemoryListResponse(total=total, items=items)

    # ── Update ────────────────────────────────────────────────────────────────

    async def update(self, memory_id: uuid.UUID, payload: MemoryUpdate) -> Optional[MemoryRead]:
        memory = await self.db.get(Memory, memory_id)
        if memory is None or memory.deleted_at is not None:
            return None

        for field, value in payload.model_dump(exclude_unset=True).items():
            setattr(memory, field, value)

        await self.db.flush()
        await self.db.refresh(memory)
        result = MemoryRead.model_validate(memory)
        await cache_delete(f"{CACHE_PREFIX}{memory_id}")
        await cache_set(f"{CACHE_PREFIX}{memory_id}", result.model_dump(mode="json"))
        return result

    # ── Delete (soft) ─────────────────────────────────────────────────────────

    async def delete(self, memory_id: uuid.UUID) -> bool:
        from datetime import datetime, timezone
        memory = await self.db.get(Memory, memory_id)
        if memory is None or memory.deleted_at is not None:
            return False
        memory.deleted_at = datetime.now(timezone.utc)
        await self.db.flush()
        await cache_delete(f"{CACHE_PREFIX}{memory_id}")
        return True
