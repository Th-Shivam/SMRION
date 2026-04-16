"""
Memory router – CRUD endpoints for SMRION memory units.
All routes live under /api/v1/memories.
"""

import uuid
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.schemas.memory import MemoryCreate, MemoryListResponse, MemoryRead, MemoryUpdate
from app.services.memory_service import MemoryService

router = APIRouter(prefix="/memories", tags=["Memories"])

# placeholder until real auth middleware is added
DEMO_USER_ID = "demo-user-001"


def get_memory_service(db: AsyncSession = Depends(get_db)) -> MemoryService:
    return MemoryService(db)


@router.post("", response_model=MemoryRead, status_code=status.HTTP_201_CREATED, summary="Create memory")
async def create_memory(
    payload: MemoryCreate,
    svc: MemoryService = Depends(get_memory_service),
) -> MemoryRead:
    return await svc.create(user_id=DEMO_USER_ID, payload=payload)


@router.get("", response_model=MemoryListResponse, summary="List memories")
async def list_memories(
    skip: Annotated[int, Query(ge=0)] = 0,
    limit: Annotated[int, Query(ge=1, le=100)] = 20,
    svc: MemoryService = Depends(get_memory_service),
) -> MemoryListResponse:
    return await svc.list(user_id=DEMO_USER_ID, skip=skip, limit=limit)


@router.get("/{memory_id}", response_model=MemoryRead, summary="Get memory by ID")
async def get_memory(
    memory_id: uuid.UUID,
    svc: MemoryService = Depends(get_memory_service),
) -> MemoryRead:
    memory = await svc.get(memory_id)
    if memory is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Memory not found")
    return memory


@router.patch("/{memory_id}", response_model=MemoryRead, summary="Update memory")
async def update_memory(
    memory_id: uuid.UUID,
    payload: MemoryUpdate,
    svc: MemoryService = Depends(get_memory_service),
) -> MemoryRead:
    memory = await svc.update(memory_id, payload)
    if memory is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Memory not found")
    return memory


@router.delete("/{memory_id}", status_code=status.HTTP_204_NO_CONTENT, summary="Soft-delete memory")
async def delete_memory(
    memory_id: uuid.UUID,
    svc: MemoryService = Depends(get_memory_service),
) -> None:
    deleted = await svc.delete(memory_id)
    if not deleted:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Memory not found")
