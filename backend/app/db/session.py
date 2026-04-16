"""
Async SQLAlchemy engine, session factory, and Base declarative model.
"""

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase

from app.core.config import settings
from app.core.logging import logger


# ── Engine ────────────────────────────────────────────────────────────────────

engine = create_async_engine(
    settings.DATABASE_URL,
    echo=settings.DEBUG,
    pool_pre_ping=True,
    pool_size=10,
    max_overflow=20,
)

# ── Session Factory ───────────────────────────────────────────────────────────

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False,
    autocommit=False,
)


# ── Base Model ────────────────────────────────────────────────────────────────

class Base(DeclarativeBase):
    """Shared declarative base for all SQLAlchemy ORM models."""
    pass


# ── Dependency ────────────────────────────────────────────────────────────────

async def get_db() -> AsyncSession:
    """FastAPI dependency that yields an async DB session."""
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise


# ── Lifecycle helpers ─────────────────────────────────────────────────────────

async def init_db() -> None:
    """Create all tables (use Alembic in production)."""
    async with engine.begin() as conn:
        logger.info("Initialising database tables...")
        await conn.run_sync(Base.metadata.create_all)
        logger.info("Database tables ready.")


async def close_db() -> None:
    """Dispose the engine connection pool."""
    await engine.dispose()
    logger.info("Database connection pool closed.")
