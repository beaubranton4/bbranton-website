# Workout Log

Tracking lifts over time for Beau and Partner. Data source of truth is `log.json`; this file is a human-readable rollup that Claude keeps in sync.

## How to log a session
Tell Claude what you did (exercise, equipment, weight × reps, note failures). Claude appends to `log.json`, updates the session table below, and refreshes the per-lift progress section.

Notes on units:
- Weight in lbs.
- Dumbbell weight is **per dumbbell** (one hand). Volume is computed the same way (weight × reps) — treat trends, not the absolute number vs. barbell lifts.
- Est. 1RM uses Epley: `weight × (1 + reps / 30)`.

---

## Sessions

### 2026-07-23 — Full body

**Beau**
| Exercise            | Sets                          | Top set  | Est. 1RM | Volume |
|---------------------|-------------------------------|----------|----------|--------|
| Bench Press (bar)   | 185×8, 205×6 F, 205×5 F       | 205×6 F  | 246      | 3,535  |
| Squat (bar)         | 245×8, 265×8, 285×8           | 285×8    | 361      | 6,360  |
| Row (bar)           | 155×8, 185×8, 190×8           | 190×8    | 241      | 4,240  |
| Deadlift (bar)      | 255×8, 260×8, 265×8           | 265×8    | 336      | 6,240  |
| Shoulder Press (DB) | 55×8, 60×8, 65×8              | 65×8     | 82       | 1,440  |
| Glute Machine       | 90×8, 135×8, 135×8            | 135×8    | 171      | 2,880  |

Session volume: **24,695 lb**.

**Partner**
| Exercise            | Sets                          | Top set  | Est. 1RM | Volume |
|---------------------|-------------------------------|----------|----------|--------|
| Bench Press (bar)   | 75×8, 77×8, 77×7 F            | 77×8     | 97       | 1,755  |
| Squat (bar)         | 85×8, 105×8, 135×8            | 135×8    | 171      | 2,600  |
| Row (bar)           | 95×8, 95×8, 100×8             | 100×8    | 127      | 2,320  |
| Deadlift (bar)      | 115×8, 135×8, 145×8           | 145×8    | 184      | 3,160  |
| Shoulder Press (DB) | 25×8, 25×5 F, 25×4 F          | 25×8     | 32       | 425    |
| Glute Machine       | 45×8, 45×8, 55×8              | 55×8     | 70       | 1,160  |

Session volume: **11,420 lb**.

_F = failure on the last rep._

---

## Progress by lift

### Beau
| Lift                | Date       | Top set   | Est. 1RM | Volume |
|---------------------|------------|-----------|----------|--------|
| Bench Press (bar)   | 2026-07-23 | 205×6 F   | 246      | 3,535  |
| Squat (bar)         | 2026-07-23 | 285×8     | 361      | 6,360  |
| Row (bar)           | 2026-07-23 | 190×8     | 241      | 4,240  |
| Deadlift (bar)      | 2026-07-23 | 265×8     | 336      | 6,240  |
| Shoulder Press (DB) | 2026-07-23 | 65×8      | 82       | 1,440  |
| Glute Machine       | 2026-07-23 | 135×8     | 171      | 2,880  |

### Partner
| Lift                | Date       | Top set   | Est. 1RM | Volume |
|---------------------|------------|-----------|----------|--------|
| Bench Press (bar)   | 2026-07-23 | 77×8      | 97       | 1,755  |
| Squat (bar)         | 2026-07-23 | 135×8     | 171      | 2,600  |
| Row (bar)           | 2026-07-23 | 100×8     | 127      | 2,320  |
| Deadlift (bar)      | 2026-07-23 | 145×8     | 184      | 3,160  |
| Shoulder Press (DB) | 2026-07-23 | 25×8      | 32       | 425    |
| Glute Machine       | 2026-07-23 | 55×8      | 70       | 1,160  |
