"""
Memory Pydantic schemas – request / response contracts.
"""

import uuid
from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field


class MemoryCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=255)
    content: str = Field(..., min_length=1)
    category: Optional[str] = Field(None, max_length=64)
    tags: Optional[str] = Field(None, description="Comma-separated tags")


class MemoryUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=1, max_length=255)
    content: Optional[str] = Field(None, min_length=1)
    category: Optional[str] = Field(None, max_length=64)
    tags: Optional[str] = None


class MemoryRead(BaseModel):
    id: uuid.UUID
    user_id: str
    title: str
    content: str
    category: Optional[str]
    tags: Optional[str]
    embedding_id: Optional[str]
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}


class MemoryListResponse(BaseModel):
    total: int
    items: list[MemoryRead]
