# SMRION Backend API

> **Production-ready FastAPI backend for the SMRION AI Memory System.**

---

## Architecture

```
backend/
├── app/
│   ├── core/
│   │   ├── config.py        # Pydantic Settings (loads .env)
│   │   ├── logging.py       # Logging config
│   │   └── security.py      # JWT + bcrypt helpers
│   ├── db/
│   │   ├── session.py       # Async SQLAlchemy engine + get_db()
│   │   └── redis.py         # Redis client + cache helpers
│   ├── models/
│   │   ├── base.py          # UUID / Timestamp / SoftDelete mixins
│   │   └── memory.py        # Memory ORM model
│   ├── schemas/
│   │   ├── health.py        # HealthResponse schema
│   │   └── memory.py        # MemoryCreate / Read / Update schemas
│   ├── services/
│   │   ├── health_service.py # DB + Redis latency checks
│   │   └── memory_service.py # Memory CRUD + cache-aside
│   ├── routes/
│   │   ├── __init__.py      # Aggregated api_router
│   │   ├── health.py        # GET /api/v1/health
│   │   └── memory.py        # CRUD /api/v1/memories
│   └── main.py              # FastAPI app + lifespan hooks
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
├── .env                     # ⚠️ Never commit – listed in .gitignore
└── .env.example             # Safe template to commit
```

---

## Quick Start (Docker)

### 1. Clone & enter the backend directory

```bash
cd backend
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env – set a real SECRET_KEY:
python -c "import secrets; print(secrets.token_hex(32))"
```

### 3. Build & run all services

```bash
docker compose up --build
```

| Service    | URL / Port              |
|------------|-------------------------|
| FastAPI    | http://localhost:8000    |
| Swagger UI | http://localhost:8000/docs |
| ReDoc      | http://localhost:8000/redoc |
| PostgreSQL | localhost:5432           |
| Redis      | localhost:6379           |

### 4. Health check

```bash
curl http://localhost:8000/api/v1/health
```

```json
{
  "status": "ok",
  "version": "0.1.0",
  "environment": "development",
  "timestamp": "2026-04-16T18:00:00Z",
  "services": {
    "postgres": { "status": "ok", "latency_ms": 1.23 },
    "redis":    { "status": "ok", "latency_ms": 0.45 }
  }
}
```

---

## Local Development (without Docker)

```bash
# Create virtual env
python -m venv .venv
source .venv/bin/activate

# Install deps
pip install -r requirements.txt

# Run (auto-reload)
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

> Make sure your local `.env` points `POSTGRES_HOST=localhost` and `REDIS_HOST=localhost`.

---

## API Endpoints

### Health

| Method | Path                   | Description              |
|--------|------------------------|--------------------------|
| GET    | `/api/v1/health/ping`  | Lightweight liveness probe |
| GET    | `/api/v1/health`       | Full dependency health check |

### Memories

| Method | Path                        | Description      |
|--------|-----------------------------|------------------|
| POST   | `/api/v1/memories`          | Create memory    |
| GET    | `/api/v1/memories`          | List memories    |
| GET    | `/api/v1/memories/{id}`     | Get memory       |
| PATCH  | `/api/v1/memories/{id}`     | Update memory    |
| DELETE | `/api/v1/memories/{id}`     | Soft-delete      |

---

## Database Migrations (Alembic)

```bash
# Initialise (first time only)
alembic init alembic

# In alembic/env.py – point to DATABASE_URL_SYNC from settings

# Generate a migration
alembic revision --autogenerate -m "initial"

# Apply migrations
alembic upgrade head
```

---

## Environment Variables Reference

| Variable                   | Default            | Description                  |
|----------------------------|--------------------|------------------------------|
| `APP_ENV`                  | `development`      | `development` / `production` |
| `DEBUG`                    | `false`            | Enable SQLAlchemy query logs |
| `SECRET_KEY`               | **required**       | JWT signing secret           |
| `POSTGRES_HOST`            | `localhost`        | DB host (use `postgres` in Docker) |
| `POSTGRES_USER`            | **required**       | DB username                  |
| `POSTGRES_PASSWORD`        | **required**       | DB password                  |
| `POSTGRES_DB`              | **required**       | DB name                      |
| `REDIS_HOST`               | `localhost`        | Redis host (use `redis` in Docker) |
| `REDIS_TTL_SECONDS`        | `3600`             | Default cache TTL            |

---

## Tech Stack

| Layer      | Technology                      |
|------------|---------------------------------|
| Framework  | FastAPI + Uvicorn               |
| ORM        | SQLAlchemy 2.0 (async)          |
| Database   | PostgreSQL 16                   |
| Cache      | Redis 7                         |
| Auth       | JWT (python-jose) + bcrypt      |
| Validation | Pydantic v2                     |
| Container  | Docker + Docker Compose         |

---

## Extending for SMRION

The service layer is designed to grow with SMRION's AI memory pipeline:

- **`app/services/`** – add `embedding_service.py` (pgvector / Pinecone calls)
- **`app/models/`** – add `agent.py`, `session.py`, `user.py`
- **`app/routes/`** – add `auth.py`, `search.py` (vector similarity routes)
- **`app/core/`** – add `middleware.py` for rate-limiting / request tracing
