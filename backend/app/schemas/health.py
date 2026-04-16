"""
Health-check Pydantic schemas used in the /health endpoint.
"""

from datetime import datetime
from typing import Literal

from pydantic import BaseModel


class ServiceStatus(BaseModel):
    status: Literal["ok", "degraded", "down"]
    latency_ms: float | None = None
    detail: str | None = None


class HealthResponse(BaseModel):
    status: Literal["ok", "degraded"]
    version: str
    environment: str
    timestamp: datetime
    services: dict[str, ServiceStatus]
