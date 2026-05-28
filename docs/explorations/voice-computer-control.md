# Voice-Controlled Computer — Developer-First

> Created 2026-05-27. The general "talk to your Mac" idea ([ideas-list.md](./ideas-list.md)) narrowed to a **developer beachhead**, because devs operate in a small, predictable, mostly-scriptable set of apps — which collapses the hard problem. Also the cleanest live example of the [developer-first AI-native rebuild framework](./frameworks.md): Beau is the user.

## Verdict (2026-05-27)

**It depends — but the developer beachhead is the unlock, and it's prototype-worthy this week.** The general "control any app by voice" problem is brutal (unbounded GUI surface, fragile vision-agent clicking, racing Apple). Scoped to developers it gets tractable: a dev's whole day lives in ~5 apps that are almost entirely CLI-, keyboard-, and API-addressable — so you can drive them *deterministically* and skip the slow screenshot-reason-click loop for 90% of actions. Strong shareability, real willingness to pay, Beau is the dogfood user. The risks are an entrenched accessibility-community incumbent (Talon) and a crowded dictation field — so the wedge has to be **agentic command-and-control**, not dictation.

## Why "developers first" is the right wedge

The hardest part of voice computer control is the **unbounded surface area** — any app, any UI, fragile pixel-level clicking. Beau's insight kills that: **developers only move between a set number of applications.**

- A dev's day ≈ terminal/shell, editor (VS Code / Cursor), browser, git, Slack/Discord, maybe a DB client or k8s dashboard. Small, predictable, learnable.
- **Almost all of it is already deterministic and programmatic** — CLI commands, keyboard shortcuts, git, package managers, APIs. You don't need a vision agent to "click the commit button"; you run `git commit`. The reliability problem mostly evaporates.
- **Developers are the ideal early market** — early adopters, high tolerance for rough edges, they pay for productivity, and they tell each other (dev X / Show HN / GitHub).

## Architecture — deterministic first, vision-agent as fallback

The product that wins on macOS does **not** route everything through a pixel-clicking vision agent:

1. **Voice → text** — Whisper / Superwhisper (solved; Beau uses it daily).
2. **Text → intent** — small/fast LLM classifies the utterance and extracts args.
3. **Intent → action, in priority order:**
   - **Deterministic OS/dev hooks** (fast, reliable) — shell commands, `git`, editor command palette / extension API, `open`, URL schemes, AppleScript, Accessibility API (AXUIElement), Spotlight, app CLIs (`gh`, `docker`, `kubectl`).
   - **Vision/computer-use agent fallback** (Claude computer-use / OpenAI CUA) — only for arbitrary GUI tasks with no programmatic path.

The wedge *is* this routing: competitors that go pure-vision feel clunky and slow; deterministic-first feels instant.

## The agentic command layer (the actual differentiator)

Not dictation, not voice-coding-syntax. Natural-language command of the dev environment:
- "Run the tests." / "Commit this with a message about the auth fix." / "Open a PR against main."
- "Search the codebase for where we set the JWT expiry." / "Switch to the staging branch and pull."
- "What failed in the last CI run?" / "Spin up the dev server and open localhost."
- "Summarize this Slack thread and draft a reply."

This is itself a developer-first, AI-native product — it dogfoods the framework.

## Competitive read (operating principle E)

- **Talon Voice** — the serious incumbent. Deep in the RSI/accessibility dev community, fully scriptable voice control + voice coding. Powerful but a steep, configuration-heavy learning curve. **Wedge: agentic natural language vs. Talon's command-grammar; zero-config.**
- **Wispr Flow / Aqua Voice / Superwhisper** — fast AI dictation (text *input*). They type for you; they don't *operate* your tools. **Wedge: command-and-control, not transcription.**
- **Serenade** — voice coding, largely stalled. Shows the demand and the difficulty.
- **Cursor / Copilot voice + Apple Intelligence / Siri** — in-editor or OS-generic. **Wedge: cross-app dev workflow orchestration, not single-app or generic-consumer.**

Competition here = validation (principle G): the voice-coding/accessibility market has proven, paying, loyal users (Talon). The axis to beat them on is **AI-native natural-language agency + zero setup**.

## Score against the three rules ([guiding-principles.md](./guiding-principles.md))

1. **Pain proximity — PASS.** Beau is a developer/data analyst who already lives in Superwhisper and wants to go beyond typing. First user is himself, today.
2. **Funnel — PARTIAL/PASS.** Inherently viral demo (screen-recording of talking → IDE obeying is X/TikTok gold — hits his shareability criterion). Plus dev-distribution: Show HN, GitHub, `voice control vscode`-type SEO. New muscle vs. his consumer tool-SEO playbook.
3. **Passion — PASS.** It's a tool he wants to exist and use daily; sits at the intersection of his AI-tooling and productivity interests.

## Honest read against the portfolio thesis

- This is a **product/big-bet**, not a set-and-forget tool-SEO page — higher build and support cost, but real ARPU and a real moat (six-filter ARPU ambition ✅; "deterministic structured output" ✗ — it's an app, not a calculator).
- It breaks the "LLM-unkillable micro-SaaS" frame, like the wellness brand and Joe do. That's fine — it's a different tier, and it's the candidate where pain proximity + shareability are both highest.

## MVP (dogfood-first)

Smallest viable wedge: a macOS menubar app that listens for a hotword/hotkey, transcribes (reuse Superwhisper-style STT), classifies intent, and executes against **one** target first — the **terminal + git** (most deterministic, highest daily frequency). "Run the tests," "commit and push," "what changed," "open the PR." Ship it for himself, post the demo, see if dev X bites. Layer the editor (Cursor command palette / extension API) next, browser after.

## Open questions / next step

- **Validation:** one DataForSEO pass on `voice control vscode`, `voice coding`, `talon voice`, `voice control terminal`, `ai voice assistant for developers` — is anyone searching, or is this a Show-HN/Twitter-distributed product with no SEO surface? (Principle A: no build commitment before one DataForSEO call.)
- **Latency budget:** can the voice→intent→action loop feel instant (<1s) for the deterministic path? That's the make-or-break UX bar.
- **Scope creep guard:** resist going general-purpose ("control any app") before the dev wedge is loved. The constrained surface *is* the strategy.
