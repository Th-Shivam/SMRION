"""
Memory Retrieval Search API

GET /api/v1/search
"""

from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.schemas.search import MemorySearchResponse
from app.services.search_service import SearchService

router = APIRouter(prefix="/memory", tags=["Memory Retrieval"])


def get_search_service(db: AsyncSession = Depends(get_db)) -> SearchService:
    return SearchService(db)


@router.get(
    "/search",
    response_model=MemorySearchResponse,
    summary="Retrieve and rank memories",
    description="Hybrid retrieval of highest relevant semantic tokens from vector space bound to standard user filters."
)
async def search_memories(
    query: str = Query(..., min_length=1, description="Raw search query"),
    user_id: str = Query(..., min_length=1, description="Owner boundary"),
    limit: int = Query(10, ge=1, le=100, description="Response capacity"),
    svc: SearchService = Depends(get_search_service),
) -> MemorySearchResponse:
    """
    Search memories applying semantic parsing + raw keyword search.
    Records interaction implicitly feeding frequency bounds.
    """
    return await svc.search(user_id=user_id, query=query, limit=limit)
