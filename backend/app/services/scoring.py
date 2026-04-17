"""
Memory Scoring Engine

Calculates a final memory score using a configurable formula leveraging:
- Recency (exponential decay based on last accessed time)
- Frequency (logarithmic/bounded scale for total access counts)
- Importance (initial AI-assigned heuristic)

The score_memory(memory) function computes and returns the new score,
and optionally stores the mutated state in the SQLAlchemy object directly.
"""

from __future__ import annotations

import math
from datetime import datetime, timezone
import logging

from app.core.config import settings
from app.models.memory import Memory

logger = logging.getLogger(__name__)


def calculate_recency_score(last_accessed_at: datetime | None, current_time: datetime | None = None) -> float:
    """
    Calculate the recency score bounded between 0.0 and 1.0.
    Uses exponential decay based on `SCORE_RECENCY_DECAY_DAYS`.
    """
    if last_accessed_at is None:
        return 0.0

    if current_time is None:
        current_time = datetime.now(timezone.utc)

    # Calculate difference in days. Ensure no negative days due to clock skew.
    delta = current_time - last_accessed_at
    days_elapsed = max(0.0, delta.total_seconds() / 86400.0)

    # Exponential decay formula: e^(-days / decay_parameter)
    # A day count equal to the parameter reduces the score to roughly 0.36
    score = math.exp(-days_elapsed / settings.SCORE_RECENCY_DECAY_DAYS)
    return float(score)


def calculate_frequency_score(access_count: int) -> float:
    """
    Calculate frequency score bounded between 0.0 and 1.0.
    Uses a standard logarithmic compression (e.g. log10) mapped to a max cap
    to prevent unlimited climbing.
    """
    if access_count <= 0:
        return 0.0

    # log10(access_count + 1) provides a smooth ramp-up.
    # We can cap the max "valuable" access count at 100 which gives log10(101) ~ 2.0
    # Dividing by 2 bounds it roughly [0, 1].
    raw_log = math.log10(access_count + 1)
    score = min(1.0, raw_log / 2.0)
    return float(score)


def score_memory(memory: Memory) -> float:
    """
    Computes the composite score using configurable weights.
    Mutates the `final_score` attribute on the provided `memory` object.
    
    Formula:
      Score = (w1 * Recency) + (w2 * Frequency) + (w3 * Importance)
    """
    # Defensive programming: ensure valid timestamps exist 
    effective_last_accessed_at = memory.last_accessed_at or memory.created_at

    r_score = calculate_recency_score(effective_last_accessed_at)
    f_score = calculate_frequency_score(memory.access_count)
    i_score = memory.importance_score

    # Apply Weights
    weighted_recency = r_score * settings.SCORE_WEIGHT_RECENCY
    weighted_frequency = f_score * settings.SCORE_WEIGHT_FREQUENCY
    weighted_importance = i_score * settings.SCORE_WEIGHT_IMPORTANCE

    final_score = weighted_recency + weighted_frequency + weighted_importance

    # Keep exactly between 0.0 and 1.0 just to be safe
    final_score = max(0.0, min(1.0, final_score))

    logger.debug(
        "Scoring memory_id=%s | R=%.2f F=%.2f I=%.2f | Final=%.3f",
        memory.id, r_score, f_score, i_score, final_score
    )

    # Apply back to the DB model instance
    memory.final_score = final_score
    
    return final_score
