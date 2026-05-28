# Oil Wells vs. Pipelines — Two Strategies for Building AI Companies

**Source:** Joe Schmidt IV & Angela Strange, Andreessen Horowitz — [a16z.com/oil-wells-vs-pipelines-two-strategies-for-building-ai-companies](https://a16z.com/oil-wells-vs-pipelines-two-strategies-for-building-ai-companies/). Resurfaced by [@joeschmidtiv on X](https://x.com/joeschmidtiv/status/2059642470334677472) as a long-form X Article (gated; this summary is built from the a16z post the X Article points back to).

**One-line takeaway:** Every AI company has to choose between **owning the source of truth** (drill an oil well) or **automating the work between sources of truth** (run a pipeline). Trying to do both at once is the trap. Pick one game and play to win it.

---

## Core thesis

AI founders face a strategic fork. Both paths can produce venture-scale outcomes, but they require **different products, different sales motions, and different moats**. Confusion between them is the most common avoidable mistake.

> "Both can generate venture-scale outcomes — they just require different approaches to building, selling, and compounding advantage."

## The two strategies

### Oil wells — own the ground truth

Become the **system of record** for a workflow by organizing unstructured or dispersed data into a single source of truth. Replace a legacy system with an order-of-magnitude improvement; once data is consolidated under you, switching costs and workflow dependency compound into a structural moat.

Two sub-shapes:
- **Greenfield** — a new data source nobody owns yet.
- **Replacement** — a legacy incumbent is vulnerable enough to rip out.

### Pipelines — orchestrate the work between systems

A horizontal automation platform that moves data and judgment-heavy work *across* existing systems. Handles the unstructured glue work humans do today — reading documents, making context-dependent decisions, executing across departments — without forcing customers to replace anything.

## When each strategy fits

**Oil well when:**
- Owning critical data unlocks meaningfully new workflows
- Disparate/unstructured data, once consolidated, is a 10× experience
- The incumbent is replaceable, or the data source is new

**Pipeline when:**
- The market is too fragmented or labor-heavy for a rip-and-replace
- Legacy systems are too embedded or compliance-heavy to swap out
- Customers won't replace, but will welcome a lightweight bridge between silos
- The value is in automating judgment-heavy work that already happens

## Customer entry & stickiness — the trade-off

| | Oil wells | Pipelines |
|---|---|---|
| **Entry motion** | Rip-and-replace — hard, slow, high-conviction | Lightweight overlay — fast, low-friction |
| **Stickiness source** | Owning the data → structural lock-in | Reinforcing workflows over time |
| **Moat shape** | Deep, structural, durable | Process embedding, compounding |
| **Time to traction** | Slow | Fast |

## Important caveat

> "Customers don't have to choose." Complex enterprises often deploy both strategies simultaneously in different business units.

The caveat is about *customers*, not *builders*. As a founder, the article is clear: **know which game you're playing.** Trying to be both the system of record *and* the horizontal pipeline at the same time is how AI companies get stuck — neither moat compounds.

## What the article does *not* do

- No specific company examples — it stays strategically abstract.
- No prescriptive "which is better" — both can be venture-scale. The point is clarity, not preference.

---

## How this connects to my board

*(My own annotation — not from the article.)*

- **Joe (finance agent)** = clearly a **pipeline** — orchestrates judgment-heavy work across the bills/cards/subscriptions humans already have, no rip-and-replace. Stickiness compounds as it learns the household.
- **Wellness brand** = also pipeline-shaped — sits across fitness/nutrition/grocery surfaces; doesn't try to be the system of record.
- **Dugout Edge** = closest to an **oil well** for youth baseball — organizing lineups/practices/stats into a single source of truth for a coach. The "expand into a Coach OS" question in [top-ideas.md](../explorations/top-ideas.md) is literally an "drill deeper into the well vs. stop digging" decision.
- **The dev-first AI-native rebuild lens** ([frameworks.md](../explorations/frameworks.md)) — most candidates there (Resend, Cal.com, Plain, Documenso) are **oil wells** for a specific primitive. The voice-controlled dev environment ([voice-computer-control.md](../explorations/voice-computer-control.md)) is a **pipeline** — it orchestrates work across the dev's existing tools rather than replacing any of them. Useful to be honest about that: pipelines win on speed-to-traction but the moat has to be designed in (the deterministic-routing layer + the agentic command graph are where stickiness lives).
- **The trap to avoid:** pitching a single product as both. If Joe ever tries to *be* the bank, it stops being a pipeline; if Dugout ever tries to *be* the league's website too, the well stops compounding.
