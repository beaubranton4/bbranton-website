# Joe — MVP Spec (landing + deterministic tool)

**Repo (when built):** `~/projects/joe-finance/` · own git + Vercel
**Depth:** landing + waitlist, plus one functional deterministic tool.
**Status:** spec only. Build in a later batch on Beau's go.

## What it is

The version Beau named: a personal-finance agent that **automatically optimizes spend
across the credit cards you already have** — right card for each category, and burns
down the perks/credits you're leaving on the table. Full autonomy is a large build
(Plaid, card-issuer scraping, agentic checkout), so v1 validates demand + ships the
non-autonomous, no-account-linking core that's still genuinely useful.

## Validation metric

Waitlist signups + "connect-interest" clicks (how many want the autonomous version) +
completion rate of the card-optimizer tool.

## The functional tool (deterministic, no account linking)

Input: which cards you hold (multi-select from a seeded card DB). Output:
- **Perks left on the table** — the recurring credits each card offers (Amex Plat ~$1,800/yr
  of credits, CSR travel/dining, etc.) with an annual "you're probably losing ~$X" estimate.
- **Which card to use per category** — dining / travel / groceries / gas / online → best
  multiplier among the user's cards.
- No Plaid, no scraping — pure rules over a static card-benefits dataset. LLM-hard to
  render as a clean, personal, always-right table (that's the wedge vs. a chat answer).

## Data model (Supabase)

- `cards (id, issuer, name, annual_fee, credits jsonb, category_multipliers jsonb)`
- `waitlist (id, email, cards_held text[], wants_autonomy bool, created_at)`

## Key screens

Landing (the autonomous "Joe does the nickel-and-diming for you" pitch + waitlist) →
Card optimizer tool → result table → "want Joe to actually do this for you?" waitlist CTA.

## Honest competitive framing (on the landing)

Pine AI and Rocket Money already ship the autonomous playbook. Joe's wedge is
personality-led + a premium-card-credit-burndown specialty, not first-mover. Say so.

## Not in v1

Any account linking, autonomous actions, voice/email negotiation, take-rate billing —
all gated behind demonstrated demand from the waitlist + tool usage.
