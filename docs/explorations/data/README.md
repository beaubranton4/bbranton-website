# Raw Keyword Research Data

Per-day folders. Each pull produces two files: the raw `.json` (full DataForSEO response) and a clean `.csv` (the columns you actually care about, sorted by recent demand).

## Folder structure

```
data/
├── README.md         ← you are here
└── YYYY-MM-DD/       ← one folder per research session date
    ├── <cluster>_<seed>_<date>.json   ← raw API response
    └── <cluster>_<seed>_<date>.csv    ← human-readable version
```

## CSV columns

| column | meaning |
|---|---|
| `keyword` | the actual search phrase |
| `search_volume_12mo_avg` | DataForSEO's reported 12-month average monthly volume (**warning:** viral spikes inflate this) |
| `recent_3mo_avg` | average of the last 3 months — **the more honest number** for current demand |
| `keyword_difficulty` | SEO difficulty 0–100, lower is easier (blank = not reported) |
| `cpc_usd` | cost per click in USD — proxy for commercial intent |
| `competition_level` | LOW / MEDIUM / HIGH (paid competition) |
| `competition_score` | 0–1 numeric competition score |
| `yearly_trend_pct` | % change vs same month last year |
| `quarterly_trend_pct` | % change vs same month last quarter |
| `monthly_trend_pct` | % change vs last month |
| `intent` | informational / commercial / transactional / navigational |

**Rows are sorted by `recent_3mo_avg` descending** — top rows are the current biggest opportunities.

## How to read the data — the one warning

**Always check `recent_3mo_avg` against `search_volume_12mo_avg`.** If they diverge wildly (e.g., recent is 880 but reported is 301,000), something viral happened in the last year that inflated the 12-month average. See `literacy-crisis.md` exploration for the cautionary tale — a viral spike in Jul-Aug 2025 made "critical thinking exercises" look like 301k/mo when real recent demand was ~880/mo.

## Sessions

### 2026-05-21 — initial big research session
15 files. Covered the Calorie Cart product, fitness tools cluster, data/AI tools cluster, personal finance cluster. See:

- [`2026-05-21/INDEX.md`](./2026-05-21/INDEX.md) — per-file summary of what each one validates

### 2026-05-22 — Apple Notes mining follow-up
Validating the two wedges surfaced by the notes-mining pass: subfloor renovation cost calculator entry point + GEO (generative engine optimization) category.

- `renovation_subfloor-cost_2026-05-22.csv` — subfloor cluster
- `geo_generative-engine-optimization_2026-05-22.csv` — GEO cluster
