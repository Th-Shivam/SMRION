"""
Health-check service – pings PostgreSQL and Redis, measures latency.
"""

import time
from datetime import datetime, timezone

from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.db.redis import get_redis
from app.schemas.health import HealthResponse, ServiceStatus


async def get_health(db: AsyncSession) -> HealthResponse:
    services: dict[str, ServiceStatus] = {}

    # ── PostgreSQL ────────────────────────────────────────────────────────────
    try:
        t0 = time.perf_counter()
        await db.execute(text("SELECT 1"))
        latency_ms = (time.perf_counter() - t0) * 1000
        services["postgres"] = ServiceStatus(status="ok", latency_ms=round(latency_ms, 2))
    except Exception as exc:
        services["postgres"] = ServiceStatus(status="down", detail=str(exc))

    # ── Redis ─────────────────────────────────────────────────────────────────
    try:
        redis = get_redis()
        t0 = time.perf_counter()
        await redis.ping()
        latency_ms = (time.perf_counter() - t0) * 1000
        services["redis"] = ServiceStatus(status="ok", latency_ms=round(latency_ms, 2))
    except Exception as exc:
        services["redis"] = ServiceStatus(status="down", detail=str(exc))

    overall = (
        "ok"
        if all(s.status == "ok" for s in services.values())
        else "degraded"
    )

    return HealthResponse(
        status=overall,
        version=settings.APP_VERSION,
        environment=settings.APP_ENV,
        timestamp=datetime.now(timezone.utc),
        services=services,
    )
