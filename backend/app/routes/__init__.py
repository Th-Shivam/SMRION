"""
Central API router – aggregates all sub-routers under /api/v1.
"""

from fastapi import APIRouter

from app.routes.health import router as health_router
from app.routes.ingestion import router as ingestion_router
from app.routes.memory import router as memory_router

api_router = APIRouter()

api_router.include_router(health_router)
api_router.include_router(memory_router)
api_router.include_router(ingestion_router)
