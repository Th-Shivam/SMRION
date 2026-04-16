"""
SMRION FastAPI application entry point.
Configures CORS, lifespan (startup/shutdown), and mounts the API router.
"""

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.logging import logger, setup_logging
from app.db.redis import close_redis, init_redis
from app.db.session import close_db, init_db
from app.routes import api_router


# ── Lifespan ──────────────────────────────────────────────────────────────────

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup → yield → Shutdown."""
    setup_logging("DEBUG" if settings.DEBUG else "INFO")
    logger.info("Starting %s v%s [%s]", settings.APP_NAME, settings.APP_VERSION, settings.APP_ENV)

    await init_db()
    await init_redis()

    yield  # ← application is live here

    await close_redis()
    await close_db()
    logger.info("Shutdown complete.")


# ── Application ───────────────────────────────────────────────────────────────

app = FastAPI(
    title=f"{settings.APP_NAME} API",
    description="Production-ready backend for the SMRION AI Memory System.",
    version=settings.APP_VERSION,
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
    lifespan=lifespan,
)

# ── Middleware ────────────────────────────────────────────────────────────────

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Routes ────────────────────────────────────────────────────────────────────

app.include_router(api_router, prefix=settings.API_V1_PREFIX)


# ── Root ──────────────────────────────────────────────────────────────────────

@app.get("/", tags=["Root"], include_in_schema=False)
async def root():
    return {
        "name": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "docs": "/docs",
    }
