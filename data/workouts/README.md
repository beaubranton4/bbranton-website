# Workout Log

Tracking lifts over time for Beau and Partner. Data source of truth is `log.json`; this file is a human-readable rollup that Claude keeps in sync.

## How to log a session
Tell Claude what you did (exercise, equipment, weight × reps, note failures). Claude appends to `log.json`, updates the session table below, and refreshes the per-lift progress section.

---

## Sessions

### 2026-07-23 — Bench Press (barbell)

**Beau**
| Set | Weight | Reps | Note |
|-----|--------|------|------|
| 1   | 185    | 8    |      |
| 2   | 205    | 6    | failure |
| 3   | 205    | 5    | failure |

Top set: 205 × 6 (failure). Estimated 1RM (Epley): **246 lbs**.

**Partner**
| Set | Weight | Reps | Note |
|-----|--------|------|------|
| 1   | 75     | 8    |      |
| 2   | 77     | 8    |      |
| 3   | 77     | 7    | failure |

Top set: 77 × 8. Estimated 1RM (Epley): **97 lbs**.

---

## Progress by lift

### Bench Press — Beau
| Date       | Top set (weight × reps) | Est. 1RM | Total volume |
|------------|--------------------------|----------|--------------|
| 2026-07-23 | 205 × 6 (failure)        | 246      | 3,535 lbs    |

### Bench Press — Partner
| Date       | Top set (weight × reps) | Est. 1RM | Total volume |
|------------|--------------------------|----------|--------------|
| 2026-07-23 | 77 × 8                   | 97       | 1,755 lbs    |

_Est. 1RM uses Epley: `weight × (1 + reps / 30)`. Volume = sum of weight × reps across all sets._
