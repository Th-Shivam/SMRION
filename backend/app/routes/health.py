"""
Health-check router.
GET /api/v1/health  → detailed service status
GET /api/v1/health/ping → lightweight liveness probe
"""

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.schemas.health import HealthResponse
from app.services.health_service import get_health

router = APIRouter(prefix="/health", tags=["Health"])


@router.get("/ping", summary="Liveness probe")
async def ping():
    """Lightweight ping – returns immediately without hitting any dependency."""
    return {"status": "ok", "message": "pong"}


@router.get("", response_model=HealthResponse, summary="Full health check")
async def health_check(db: AsyncSession = Depends(get_db)):
    """
    Returns the health of all backend dependencies (PostgreSQL, Redis)
    along with measured latency for each service.
    """
    return await get_health(db)
