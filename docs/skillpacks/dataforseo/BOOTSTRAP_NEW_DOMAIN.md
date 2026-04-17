# Bootstrap: Apply the DataForSEO Research Pack to a New Domain

This guide is for replicating the keyword-research + content-engine pattern used on Dugout Edge to any new domain (e.g. SpendMyStipend, a finance SaaS, a DTC brand, anything). Everything generic lives at user scope and works automatically in any project; only a few project-specific pieces need to be dropped in and customized.

## Architecture at a glance

```
USER SCOPE — works in every project automatically
├── ~/.claude/settings.json                     # MCP server creds (once)
└── ~/.claude/skills/dataforseo-research/       # generic skill (one-call-one-answer)
    └── SKILL.md                                # endpoint picker, cost discipline

SKILL PACK (this folder — reference / shareable docs, not auto-loaded)
├── BOOTSTRAP_NEW_DOMAIN.md                     # this doc
└── templates/
    ├── keyword-content-engine.template.md      # full-pipeline template
    └── project-audit-methodology.md            # "big audit" playbook

PROJECT SCOPE — copy + customize per domain
├── .claude/commands/keyword-content-engine.md  # project's own content engine (customized)
├── CLAUDE.md                                   # router: ad-hoc vs full pipeline
├── docs/keyword-research/                      # gitignored research outputs
└── scripts/dataforseo.ts                       # optional REST fallback for cron
```

**Three modes of use, from lightest to heaviest:**

| Mode | Trigger | Tool | Per-run cost |
|------|---------|------|-------------|
| Ad-hoc SEO question | "Find me keywords around X" | `dataforseo-research` skill alone | ~$0.01-0.03 |
| Big project audit | "Rank all my ideas by SEO potential" | `project-audit-methodology.md` in this pack | ~$0.15-0.30 |
| Weekly content engine | "Run the content engine" | Project-scoped `.claude/commands/keyword-content-engine.md` | ~$0.10-0.50 |

## Prerequisites (one-time, already done for your account)

1. **DataForSEO MCP configured in `~/.claude/settings.json`.** Verify:
   ```bash
   grep -A2 '"dataforseo"' ~/.claude/settings.json
   ```
   Should show `"command": "npx"` and the `dataforseo-mcp-server` package with your login/password env vars.

2. **Optional REST fallback** (`scripts/dataforseo.ts`) — only if the new project needs cron jobs or CI keyword checks. Copy from any project that has it. Reads creds from `.env.local`:
   ```
   DATAFORSEO_LOGIN=beau@example.com
   DATAFORSEO_PASSWORD=...
   ```

## Per-project setup (15 minutes)

### Step 1: Nothing, for ad-hoc research.
Open the new project in Claude Code. Ask something like *"using dataforseo, find keywords around employee stipend management"*. The user-scope skill fires automatically. Done.

### Step 2: Add the project-scoped content engine (only if you want a weekly pipeline).
```bash
mkdir -p .claude/commands
cp /Users/beaubranton/projects/beaubranton.com/docs/skillpacks/dataforseo/templates/keyword-content-engine.template.md \
   .claude/commands/keyword-content-engine.md
```
Open the copy and fill in the `{{VARIABLE}}` placeholders. There are ~8 of them — see the template file for the full list.

### Step 3: Add the CLAUDE.md router so Claude picks the right tool.
Append to `CLAUDE.md`:
```markdown
## Router: SEO Research & Content Engine

**Ad-hoc SEO questions** (one-call-one-answer): use the generic `dataforseo-research` skill.

**Full weekly pipeline** (discovery → scoring → competitive → article): use `/keyword-content-engine` (at `.claude/commands/keyword-content-engine.md`).
```

### Step 4: Set up the local research folder (optional but recommended).
```bash
mkdir -p docs/keyword-research
printf '\n# keyword research outputs (local only)\n/docs/keyword-research/\n' >> .gitignore
```

Research runs will write dated CSVs + a `SUMMARY.md` here. Nothing gets committed.

## Running a big project audit (day-one, before building anything)

Use `templates/project-audit-methodology.md` (next to this file) — paste its contents into a Claude Code conversation along with your project's TODO/ideas list. Claude will:

1. Cluster your ideas into semantic groups (scheduling, scorekeeping, affiliate, etc.)
2. Fire **one broad `keyword_overview` call** with 50-70 head terms across all clusters
3. **Drill down** into the top 2-3 clusters with `keyword_suggestions`
4. Run `bulk_keyword_difficulty` on high-value terms missing KD data
5. Output a **ranked list + kill list + rollout plan** as `docs/keyword-research/SUMMARY.md`
6. Save dated CSVs for your own inspection

Total cost: usually $0.15-0.30. This is what you'd do for each new project (or ~annually for an existing one) to re-prioritize.

## Worked example: SpendMyStipend

**About:** B2B2C app that helps employees spend the wellness/learning/equipment stipends their employer gives them.

### Likely project variables for the content engine template

| Variable | Value |
|---|---|
| `TARGET_SITE` | `spendmystipend.com` |
| `LOCALE` | `en-US` (location_code 2840, language_code en) |
| `COMPETITORS` | `joinforma.com`, `compt.io`, `fringe.us`, `lifestylespending.com` |
| `AUDIENCE` | employees with unspent stipends, HR/People Ops admins |
| `VOICE` | practical, benefit-forward, jargon-light |
| `CONTENT_HOME` | `content/blog/` (confirm repo structure) |
| `BRAND_RULES` | no overly corporate tone; no "synergy" style jargon |
| `SEED_KEYWORDS` | see below |

### Likely seed keyword starter pack

```
employee stipend
wellness stipend
learning and development stipend
home office stipend
lifestyle spending account
remote work stipend
wellness allowance
professional development reimbursement
education stipend
work from home stipend
```

### Likely kill list (skip these — not SMS's market)
- Mass-market "perks" terms dominated by big HR suites (Gusto, Rippling, BambooHR)
- Branded competitor terms with KD 80+
- "What is an HSA" style content — saturated by financial publishers

### Suggested first audit prompt (paste into Claude Code in the SMS repo)

> Using the `dataforseo-research` skill and the project audit methodology described in `/Users/beaubranton/projects/beaubranton.com/docs/skillpacks/dataforseo/templates/project-audit-methodology.md`, analyze this list of product ideas for SpendMyStipend. Rank them by SEO opportunity (search volume × winnable difficulty × commercial intent) and recommend which 1-2 to build first. Save the full ranked list + kill list to `docs/keyword-research/SUMMARY.md` and save raw data as dated CSVs in the same folder. Budget: $0.30.
>
> [paste your product ideas / TODO list here]

That's it. The same methodology that uncovered the scorekeeping + local-lessons opportunities on Dugout Edge will surface the equivalent unknowns for SpendMyStipend.

## Sharing this pack with another machine

If someone else (or a new laptop) needs this setup, they need to:

1. Install Claude Code (obvious)
2. Add the DataForSEO MCP block to `~/.claude/settings.json` (copy from yours)
3. Copy the `~/.claude/skills/dataforseo-research/` folder (the generic skill — auto-loaded in every Claude Code session)
4. Copy this whole `skillpacks/dataforseo/` folder to wherever they keep reference docs — the two templates are reference material, not auto-loaded skills.

Everything else is project-specific and gets added per-project using Step 2-4 above.

## Changelog

- 2026-04-16 — Initial version. Extracted from the Dugout Edge workflow that used DataForSEO to pivot from "league schedule creator" (0 volume) to "baseball schedule maker" (170/mo KD 11), uncovered the scorekeeping cluster (~22k/mo) and local-lessons directory (~13k/mo KD 1-15) as top-priority builds.
