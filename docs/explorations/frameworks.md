# Idea Frameworks — Generative Lenses

These are **generative** lenses — ways to *find and source* ideas. They sit upstream of [guiding-principles.md](./guiding-principles.md) (which *evaluates* a given idea) and the [six-filter checklist](./README.md) (which says *which problems are worth tool-SEO/take-rate economics*). Run a lens to produce candidates; run the filters to decide what survives.

---

## 1. Developer-first, AI-native rebuild — "the Resend pattern" (added 2026-05-27)

**The pattern:** Take an established business whose value was delivered through a **portal / dashboard / UI**, and rebuild it as a **developer-first, API-first, AI-native** product. The capability already exists in the market — but it was built UI-first for humans clicking buttons. Rebuilt from the ground up for code and agents, it can win.

**The prototype:** **Resend** is the developer version of Mailchimp/SendGrid. Same underlying primitive (send email), but API-first, beautiful docs, an SDK in every language, no clunky campaign-builder portal. Developers who'd never touch Mailchimp reach for Resend instantly. Same story: **Cal.com** (dev Calendly), **Documenso** (dev DocuSign), **Plain** (dev/agent-first Zendesk), **PostHog** (dev-first analytics), **Knock/Courier** (dev notifications).

**Why now — the AI-agent tailwind:** Everyone is about to be running parts of their business through AI agents. An agent can't click a portal well, but it can call a clean API all day. Tools that abstracted the technical work behind a GUI assumed a *human* operator. When the operator becomes an *agent*, the UI is dead weight and the API *is* the product. The incumbents are UI-first companies bolting AI on. A from-scratch, agent-native build wins on the surface that matters: machine-consumable, well-documented, SDK + MCP-server-ready, usage-priced.

**Why it can win even though "it already exists":** The category existing is the validation (operating principle G — competition is validation). The wedge is being *built AI-first from the ground up* — agent-operable APIs, great DX, MCP servers shipped day one, pricing that fits programmatic usage — against incumbents whose architecture and business model assume a human in a dashboard.

### How to find candidates

Look at the SaaS stack a business **subscribes to in order to operate** — the recurring tools — and ask, for each:

1. **Is the core a technical primitive wrapped in a UI?** (send email, send SMS, schedule a meeting, sign a doc, run a survey, charge a card, track an event, file a ticket, store a file, flag a feature.) If yes → candidate.
2. **Would a developer or agent rather hit an API than click the portal?** If the portal is the product's "value," that value is strandable.
3. **Is the incumbent UI-first and retrofitting AI?** That's the opening — you build agent-native; they can't without breaking their core product.
4. **Is the existing API (if any) an afterthought?** Bad/missing/poorly-documented APIs = DX wedge.
5. **Does it get *more* valuable when an agent operates it autonomously?** The best candidates are tools an AI agent should run without a human at all.

**Test:** Name the incumbent, name the primitive, and write the one-line pitch — "the Resend of `<category>`." If you can't name the primitive cleanly, it's probably not a wrapped-technical-tool and the pattern doesn't apply.

### Starter candidate list (companies to "copy" as the dev/AI-native version)

> Many already have *a* dev-first version (noted). The fresh wedge is **AI-native + agent-operable from scratch**, not just "has an API." Validate demand before committing.

- **Forms / surveys** — Typeform, SurveyMonkey → dev-first, agent-fillable form & feedback API
- **CRM** — Salesforce, HubSpot → headless/API-first CRM an agent can read & write (huge, hard)
- **Helpdesk / support** — Zendesk, Intercom → agent-first support API *(Plain is early here)*
- **Billing / invoicing** — Bill.com, QuickBooks → dev-first AR/AP an agent runs
- **Scheduling** — Calendly → *Cal.com exists*; the AI-native re-cut is the agent that books for you
- **E-signature** — DocuSign → *Documenso exists*; agent-native signing flows
- **Notifications** — → *Knock/Courier exist*; still under-AI-native
- **Contracts / legal ops** — Ironclad, DocuSign CLM → API-first contract lifecycle
- **Bookkeeping / accounting** — → agent-operable ledger
- **Analytics / dashboards** — → *PostHog exists*; mostly solved
- **Status pages / incident** — Statuspage → dev-first *(several exist)*
- **Feature flags** — LaunchDarkly → *several dev-first exist*
- **Email marketing** — Mailchimp → *Resend / Loops exist* (the prototype)

### Honest read

- **Pain proximity (rule #1):** Beau *is* a developer/data analyst — he uses and resents these tools. Strong for tools he personally touches; weaker for ones he doesn't (don't build a dev-first CRM he's never operated).
- **Funnel (rule #2):** Developer distribution is its own game — docs, SEO on `<task> API`, Show HN, dev Twitter/X, open-source. Not the consumer tool-SEO he's been modeling. New muscle.
- **Where it conflicts with the portfolio thesis:** these are *products*, not set-and-forget calculator pages. Higher build + support cost, real ARPU, real moat. A bigger bet than a tool-SEO page — closer to the wellness-brand/Joe tier.
- **Best first candidate is one Beau personally lives in** — which points straight at the voice/agent-controlled dev environment ([voice-computer-control.md](./voice-computer-control.md)): a developer-first, AI-native product where he is the user.

---

## Other generative lenses already in use

Captured here so the set is in one place; full treatment lives in the linked docs.

- **Tool-SEO portfolio** ([README](./README.md), [top-ideas.md](./top-ideas.md)) — build deterministic tools that own long-tail keyword clusters LLMs can't answer cleanly in chat. The dominant lens to date.
- **Take-rate AI agent + character brand** ([joe-ai-agent.md](./joe-ai-agent.md), [wellness-brand.md](./wellness-brand.md)) — an autonomous agent does countable work, priced as a slice of value captured, fronted by a persona that doubles as the marketing.
- **Viral-lever / character-led product** ([viral-product-brainstorm](./viral-product-brainstorm-2026-05-23.md)) — pick the build where the demo *is* the distribution (the product produces shareable content by default).

## Source manifestos

External essays that have shaped or sharpened the lenses above. Faithful summaries live in [docs/manifestos/](../manifestos/).

- **[Oil Wells vs. Pipelines](../manifestos/oil-wells-vs-pipelines-joe-schmidt.md)** — Joe Schmidt IV & Angela Strange (a16z). Every AI company is either becoming the system of record (oil well) or automating the work between systems (pipeline). Pick one; both moats fail when you try to be both.
