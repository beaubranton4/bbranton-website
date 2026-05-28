# Explorations

Strategic notes on business / product ideas Beau is exploring. **This README is the TL;DR.** Open the linked files only when you need the detail.

## The thesis (2026-05-21)

**Content SEO is dying — tool SEO is the new lead magnet.** Build a portfolio of small, useful tools that meet the user's intent in a way LLMs in chat can't. Each tool owns a long-tail keyword cluster. Claude Code ships them in days. The portfolio compounds.

**Six filters any idea must pass:**
1. Deterministic / structured output (not freeform text)
2. **LLM-unkillable in chat** (if ChatGPT can answer cleanly, skip)
3. In Beau's domains (data, home, fitness, sports, AI, social, travel, finance)
4. Real search demand (validate with DataForSEO before building)
5. **Pain proximity** (Beau personally living the problem > theorizing)
6. **ARPU ambition** (bias toward $100s–$1000s, not $5–30/mo SaaS)

Bias toward **take-rate pricing** ("we win when you win") — Rocket Money / Stripe / Vercel pattern. Customer pays nothing until value is delivered.

## Active build candidates

| # | Idea | One-line | File |
|---|---|---|---|
| **1** | **Wellness brand** | Unified brand combining fitness tools (1RM calc, marathon plan, macro calc — KD 4–12, massive volume) + Calorie Cart Chrome extension under one character-led identity. Niche positioning (cutting/GLP-1) to beat Google Health Coach's generic offering. | [wellness-brand.md](./wellness-brand.md) |
| **2** | **Joe — AI finance agent** | Autonomous agent that does the nickel-and-dime financial optimization humans skip (calls customer service, burns down Amex credits at 11:59pm, drafts complaint emails). Personality-led to differentiate from Pine AI. Take 20–25% of captured value. | [joe-ai-agent.md](./joe-ai-agent.md) |

Both are siblings — same "AI agent + character brand + take-rate pricing" pattern applied to two domains (body, money).

## Key competitive realities (be honest with yourself)

- **Pine AI (19pine.ai) already ships the Joe playbook.** Joe wins on personality + premium-card-credit-burndown specialist niche, not on first-mover.
- **Google Health Coach launched 2026-05-19** ($9.99/mo, Gemini + fitness + sleep + nutrition + medical records). You can't win as another AI wellness coach app. You can win via tool-SEO portfolio + Chrome extension + narrow niche — surfaces Google won't compete on.

## Strategic context

| File | What it is |
|---|---|
| [ideas-list.md](./ideas-list.md) | Clean one-bullet-per-idea master list of everything on the board. Scan here first; depth lives in top-ideas.md. |
| [guiding-principles.md](./guiding-principles.md) | The three rules every idea must pass — pain proximity, clear funnel, genuine passion. Upstream of the six-filter checklist below. |
| [frameworks.md](./frameworks.md) | Generative lenses for *finding* ideas (vs. the rules that *evaluate* them). Holds the "developer-first AI-native rebuild" (Resend pattern) + the other sourcing patterns in use. |
| [top-ideas.md](./top-ideas.md) | Master strategic doc — full thesis, 100-candidate brainstorm, validation pass, big-bet reference. Longer reference for when you need depth. |
| [solopreneur-landscape-2026-05-27.md](./solopreneur-landscape-2026-05-27.md) | 2026 research on the solopreneur movement — archetype, new pains (context fragmentation, AI-output verification, tool sprawl), tools red/blue-ocean, and keyword landscape. Conclusion: the movement is real, the "solopreneur" keyword is weak, the opportunity is in the pains. |
| [data/](./data/) | Raw DataForSEO keyword research (CSVs + JSONs) backing every number. Organized by date. See `data/README.md`. |

## What got archived

The first few months of explorations + the per-cluster keyword research that's now synthesized into the two active candidate files. Kept in [archive/](./archive/) for history; not actively maintained.

| Archived file | Why it's there |
|---|---|
| `fitness-tools-cluster.md` | Merged into `wellness-brand.md` |
| `calorie-aware-grocery-cart.md` | Merged into `wellness-brand.md` |
| `ai-wallet.md` | Joe is the agent version of this thesis |
| `personal-finance-couples-perks.md` | Joe absorbed the active wedge; rest is owned by Rocket Money/Honeydue |
| `data-ai-tools-cluster.md` | Only the LLM pricing calc was a winner; not actively pursued |
| `snack-schedule.md` | Dugout Edge lead-magnet, not a venture |
| `ai-data-analyst.md` | Not actively pursued |
| `ebay-agentic-payments.md` | Timing bet, not active |
| `literacy-crisis.md` | Original signal was a viral-spike artifact; not viable |
| `journal-mobile-workflow.md` | Personal workflow, not a venture |
| `ai-compute-bottlenecks-dylan-patel.md` | Broader think piece, not a venture |

## Conventions (for future explorations)

- New idea → new file at top level
- Validated as a real candidate → keep at top level, link from README
- Not validated / superseded / parked → move to `archive/`
- Always pull DataForSEO before committing build time; raw data goes in `data/YYYY-MM-DD/` with CSV + JSON
- Verdict at the top of every file (good / bad / it depends + one-sentence why)
