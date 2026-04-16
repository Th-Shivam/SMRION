"""
Redis client setup using redis-py (asyncio).
Exposes a singleton client and helper functions for common cache operations.
"""

import json
from typing import Any, Optional

import redis.asyncio as aioredis

from app.core.config import settings
from app.core.logging import logger

# ── Singleton client ──────────────────────────────────────────────────────────

redis_client: aioredis.Redis | None = None


async def init_redis() -> None:
    """Initialize the async Redis connection pool."""
    global redis_client
    redis_client = aioredis.from_url(
        settings.REDIS_URL,
        encoding="utf-8",
        decode_responses=True,
        max_connections=20,
    )
    await redis_client.ping()
    logger.info("Redis connection established at %s", settings.REDIS_URL)


async def close_redis() -> None:
    """Close the Redis connection pool."""
    global redis_client
    if redis_client:
        await redis_client.aclose()
        redis_client = None
        logger.info("Redis connection closed.")


def get_redis() -> aioredis.Redis:
    """FastAPI dependency – returns the active Redis client."""
    if redis_client is None:
        raise RuntimeError("Redis client is not initialised. Call init_redis() first.")
    return redis_client


# ── Cache Helpers ─────────────────────────────────────────────────────────────

async def cache_set(
    key: str,
    value: Any,
    ttl: int = settings.REDIS_TTL_SECONDS,
) -> None:
    """Serialize *value* to JSON and store it in Redis with the given TTL."""
    client = get_redis()
    await client.setex(key, ttl, json.dumps(value))


async def cache_get(key: str) -> Optional[Any]:
    """Return the deserialized value for *key*, or None if absent/expired."""
    client = get_redis()
    raw = await client.get(key)
    return json.loads(raw) if raw is not None else None


async def cache_delete(key: str) -> None:
    """Delete a key from Redis."""
    client = get_redis()
    await client.delete(key)


async def cache_exists(key: str) -> bool:
    """Return True if *key* exists in Redis."""
    client = get_redis()
    return bool(await client.exists(key))
