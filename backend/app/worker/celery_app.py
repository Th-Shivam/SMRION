"""
Celery application factory for SMRION.

The broker and result backend both point at the Redis instance already
present in the stack.  Import this module to get the ``celery`` object
or to access auto-discovered tasks under ``app.worker.tasks``.

Start the worker with::

    celery -A app.worker.celery_app worker --loglevel=info
"""

from celery import Celery

from app.core.config import settings

celery_app = Celery(
    "smrion",
    broker=settings.CELERY_BROKER_URL,
    backend=settings.CELERY_RESULT_BACKEND,
    include=["app.worker.tasks"],
)

celery_app.conf.update(
    # Serialisation
    task_serializer="json",
    result_serializer="json",
    accept_content=["json"],
    # Timezones
    timezone="UTC",
    enable_utc=True,
    # Reliability: re-queue tasks on worker restart
    task_acks_late=True,
    worker_prefetch_multiplier=1,
    # Result lifetime (24 h)
    result_expires=86_400,
)
