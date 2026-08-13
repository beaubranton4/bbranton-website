# Desk-Worker Mobility App — desktop software for people who sit and code all day

*Explored 2026-08-11. Origin: Beau's own journal that morning — "I really struggle from sitting at a desk all day… posture doesn't even matter when you're static for 8 hours a day. It requires movement and mobility. Use it or lose it." Personal routine already kept at `docs/health/desk-mobility-routine.md`.*

**The idea:** software installed on the laptop (menubar/desktop-native, not another phone app) that interrupts the static hours with guided movement — progressive programs for the four desk-victim areas: hip flexors, thoracic spine, core, glutes. Not a break *timer* (those exist) — a break *coach* with actual programming, progression, and streaks.

## Holy Grail filter (guiding-principles.md)

| Rule | Verdict | Evidence |
|---|---|---|
| 1. Pain proximity | **STRONG PASS** | Beau is the literal ICP: technical desk worker, 8h static days, left-biased thoracic restriction, journaled the pain unprompted the same morning, already runs a daily routine for it |
| 2. Clear funnel | **PASS with a twist** | Product-name searches are ~zero, but the problem cluster is huge (below) and the launch-channel funnel (HN/PH/dev Twitter) fits the ICP perfectly |
| 3. Genuine passion | **PASS** | Matches his feel-and-function health philosophy (journal 8/10); he'd dogfood daily forever |

## Keyword data (DataForSEO, 2026-08-11, ~$0.15)

**Nobody searches for the product. Everybody searches for the problem.**

```
    vol/mo | comp | keyword                        | note
   165,000 | MED  | hip flexor stretches           | the monster head term
    12,100 | MED  | posture exercises              |
     9,900 | LOW6 | dead butt syndrome             | RISING: 6.6K→18K peaks in 2026
     8,100 | LOW5 | glute activation exercises     |
     2,400 | LOW  | wall slides exercise           |
     2,400 | HIGH | desk exercises / desk workout  |
     1,900 | LOW3 | thoracic mobility exercises    | comp index 3 (!)
     1,300 | MED  | office exercises               |
     1,000 | MED  | desk stretches                 |
       260 | LOW5 | deskercise                     | brandable term, empty
       210 | LOW1 | movement snacks                | the concept term, empty
       ~0  |  —   | desk job workout plan          | product phrasing doesn't exist
```

**App-category terms — small volume, huge CPCs (= someone profitably buys these clicks):**

```
    vol/mo | CPC   | keyword
     1,000 | $6.13 | stretching app
       720 | $7.15 | mobility app
       590 | $7.79 | posture app
       170 | $1.92 | posture reminder app
        90 |   —   | stretch reminder / break reminder app
        10 |   —   | desk exercise app
```

Read: $6–8 CPCs on app terms mean Pliability/Bend/GOWOD-tier companies make consumer mobility subscriptions work. The *desktop desk-worker* slice of that market has no owner.

## Competitive read — how crowded is it, tier by tier (principle E)

The problem space is crowded at every tier EXCEPT the target cell. Per principle G, the crowd is validation; the question is whether the empty cell is an opportunity or a graveyard.

| Tier | Who | Crowded? | Notes |
|---|---|---|---|
| Clinical MSK B2B | Hinge Health, Sword Health, Kaia, Vori | **Very** — billions of VC | Enterprise, clinical, insurance-integrated. Not our fight; their existence proves the money. |
| Corporate wellness platforms | Wellhub/Gympass, Personify (Virgin Pulse), Wellable, Vantage Fit | **Very** | Broad marketplaces/points programs. None do desktop-native movement coaching; a movement benefit could even *list on* these. |
| Consumer mobility apps (mobile) | Bend, Pliability, GOWOD, StretchIt, Wakeout, StretchMinder | **Fairly** | $10–20/mo works here (validates pricing). All phone-first — the phone is not where the 8 static hours happen. |
| Desktop break tools | Stretchly (OSS), Time Out, Workrave, BreakTimer, posture webcam apps | **Thin and stale** | Free/OSS utilities, timer-not-coach, mostly maintenance-mode. Zero programming, progression, or body-part logic. |
| Ergonomics B2B services | Assessment consultancies, VelocityEHS | Moderate | Services-heavy, one-shot, $$ — the thing a software perk undercuts. |

**The target cell — desktop-native × programmed training × dev-first × team license — is essentially empty.** Two honest readings of why:

1. *Graveyard reading:* desktop utilities historically monetize terribly — everyone expects Stretchly for free, and mobile-first founders chased bigger markets for a reason.
2. *Opportunity reading:* the dev-tools market broke that rule — Raycast, CleanShot, Rectangle Pro are all paid menubar apps devs happily buy when the pain is felt daily. Movement pain is felt daily. Nobody has shipped a menubar app with *actual training design* behind it (progression, four-area programming, calendar-aware interruptions) because fitness people don't build desktop software and desktop-utility people don't know training. Beau is one of very few founders holding both halves.

**The wedge, restated:** *the machine that hurts you is the machine that should fix you.* Menubar-native movement coach: calendar-aware interruptions (never mid-meeting/deep-work), 2–5 min guided micro-sessions programmed across the four areas, real progression, streaks in the status bar. **Dev-first flavor** ([[feedback_dev_first_rebuild]]): `brew install`, keyboard-driven, VS Code/terminal status integration, HN/PH launch — Vimium energy, not corporate-wellness energy. That distribution also makes the ~zero product-search-volume irrelevant.

## Funnel design (rule 2, concretely)

1. **Content engine** on the problem cluster (this is tool-SEO thesis territory): "dead butt syndrome" (rising, comp 6), "thoracic mobility exercises" (comp 3), "glute activation," "wall slides" — each article ends in the app. The 165K "hip flexor stretches" head term is the long-game backlink magnet.
2. **Launch channels**: HN "Show HN", Product Hunt, r/programming, dev Twitter — ICP-perfect, SEO-independent.
3. **B2B**: see the dedicated section below — added same day at Beau's push, and the data says it's the real business.

## B2B angle — the Hinge Health thesis (added 2026-08-11, Beau's framing)

Beau's instinct: *"companies have to pay for the damage they cause to workers from making them sit all day… they would pay for this as insurance to say they care about workers' health."* That is literally the purchase motive that built two ~$3B companies — Hinge Health and Sword Health sell digital MSK care to employers because musculoskeletal claims are a top-3 employer health cost, and because offering the benefit is care-signaling for retention. The keyword data confirms buyers with real budgets:

```
    vol/mo | CPC    | keyword
    40,500 | —      | hinge health              ← category leader brand pull, growing
     8,100 | $7.82  | sword health
     1,600 | $45.76 | corporate wellness software   (!!)
     1,600 | $45.76 | corporate wellness programs
     1,600 | $21.90 | ergonomic assessment
       260 | $22.38 | employee wellness benefits
       210 | $13.30 | wellness stipend
```

$36–46 CPCs are enterprise-deal economics — companies pay serious acquisition cost in this category, which means contracts are large.

### Is it really a cost to companies? Yes — via self-insurance, with nuances

- **The load-bearing fact: most companies >~500 employees are self-insured.** The "insurer" only administers; the employer pays actual claims from its own P&L. An engineer's back-pain journey (MRI → injections → PT → $60–80K fusion) is money directly out of the employer's pocket. MSK is consistently the **#1–2 category of employer medical spend (~15–20% of claims)** — ahead of cancer and cardiac in many books, because it hits younger employees at high frequency. This is the fact Hinge/Sword monetize: they sell *measured claims reduction* (virtual PT early → fewer surgeries) to CFOs.
- **Workers' comp is mostly NOT the vector for desk workers** — comp requires proving work causation, which works for warehouse backs, not "sitting wrecked my hip flexors." Desk damage flows through the health plan, not comp. So "companies pay for the damage" is true financially, not legally.
- **Absenteeism is documented** (back pain = top cause of lost workdays); presenteeism is real but soft science.
- **The skeptic's case:** the best RCTs on *general* corporate wellness (JAMA 2019 Illinois study, BJ's Wholesale study) found ~no hard-dollar savings, and buyers know it — wellness perks get bought and unused. Hinge escapes the critique by being clinical substitution, not wellness. A prevention app cannot honestly promise claims reduction without years of data.
- **Therefore the B2B case is two-layered:** the hard-dollar MSK cost explains why the category is enormous (and the $45 CPCs) but is captured by clinical players. What a prevention perk actually sells is the softer motive Beau named — **visible, weekly-felt care-signaling**, funded by existing wellness-stipend budgets ($500–2K/employee/yr at tech companies, frequently unspent), cheaper than one ergonomic assessment, with engagement stats HR can screenshot. Real budget, fast sales cycle, no clinical claims required.

**Where a solo founder does NOT play:** Hinge/Sword's turf — clinical PT, sensors, outcomes guarantees, insurance integration, PHI/HIPAA, 9-month enterprise sales cycles. That's a venture-scale, regulated fight.

**The realistic wedge — the "movement benefit," one tier below clinical:**
- Same desktop app, sold as a **team license** ($3–8/employee/month): pre-clinical *prevention* perk, not healthcare. No PHI, no clinical claims, no regulatory drag — deliberately.
- **Bottom-up land-and-expand** (the dev-tool motion again): individual engineers adopt free/cheap → eng manager or People Ops buys seats so it's invoiceable from the wellness budget. Wellness stipends (a real, growing line item) mean employees can expense it with zero sales cycle.
- Admin side stays thin and privacy-first: anonymized team engagement ("73% of the team moved today"), Slack streaks channel, no individual surveillance — surveillance kills adoption with exactly this ICP.
- The duty-of-care pitch writes itself for the buyer: cheaper than one ergonomic assessment (a $21.90-CPC service), visible to employees weekly, and it *demonstrates* care rather than asserting it.
- Honest caveats: corporate wellness has documented engagement/ROI skepticism (buyers have been burned by unused benefits), so the sale leans on engagement data from the consumer base; and 50-seat deals still need *some* sales motion, which Beau has to want to do — same muscle as Lakeville, interestingly.

**Effect on the thesis:** B2B rescues the weak link (consumer ARPU). Sequence stays consumer-first — dogfood → HN launch → individual subscriptions — because the consumer engagement data IS the B2B sales deck. Design the team license in from day one (org billing, seat management) so the expand motion is a pricing page, not a rebuild.

## Where AI beats the status quo (added 2026-08-11)

Honest framing first: an LLM chat already produced Beau's personal routine — the *knowledge* is free now, and any AI feature that just generates routines is a commodity. The durable AI advantages are in what a chat window cannot do — watch, time, interrupt, count, persist, adapt:

1. **Webcam movement assessment (the killer onboarding).** On-device pose estimation (MediaPipe / Apple Vision) is now good enough to run a 3-movement screen — deep squat, overhead reach, hip hinge — and identify WHICH link is restricted (ankle / hip / t-spine, left vs right), like an automated FMS. "Point your webcam, do 3 movements, get your desk-damage report + program" — nobody has this desktop-native; it's also the shareable onboarding moment that converts problem-searchers into program users. Beau's own left-bias discovery is exactly what this automates.
2. **Form feedback + rep counting during micro-sessions.** Same pose stack: count the wall slides, cue "chest taller, knees out." Turns a timer into a coach. Sword/Kaia do this on phones clinically; no desktop prevention product does. Privacy rule: ALL on-device, nothing uploaded — non-negotiable for the dev ICP.
3. **Adaptive programming.** Static playlists are the status quo. An LLM coaching layer ingests feedback ("left shoulder pinched on rep 6") and adjusts tomorrow's session — regress/progress/bias — the way a human coach would. This is the daily-log pattern applied to movement: narrate → system adapts.
4. **Interruption intelligence.** The #1 reason break apps get uninstalled is dumb timing. Calendar + meeting-detection + typing-cadence signals → interrupt at natural seams, never mid-flow. Small model, huge retention delta.
5. **Voice-guided sessions.** Realtime speech models make "exhale… sink deeper… two more" coaching nearly free to build. Feel-and-function tone, not bootcamp tone.
6. **B2B reporting.** AI-written org-level summaries from anonymized data ("movement minutes up 22% this quarter") — the HR screenshot, generated.

**LLM-unkillable check passes for the same reason:** ChatGPT can write the routine but can't interrupt you at minute 45, watch your squat, count your reps, or hold your streak. The routine is free; the follow-through is the product. Corollary: the product must still work with every AI feature turned off (timer + programs + streaks) — AI is the differentiator, not the crutch.

## Six-filter checklist quick pass

Deterministic output ✓ (timers, routines, progression math — no LLM in the loop). LLM-unkillable ✓ (ChatGPT can't interrupt you at minute 45 and count your wall slides). His domains ✓ (fitness × software × his own body). Search demand ✓ (problem cluster). Pain proximity ✓✓. ARPU ambition — consumer $5–8/mo or $29 one-time is modest; B2B seats fix it later.

## Verdict

**GO on the filter — PARKED on the calendar.** This clears the Holy Grail filter as cleanly as anything since hats, and the anti-pattern check mostly passes (one honest worry: stretch-content searchers want a free YouTube video, not software — the counterweight is the proven app-category CPCs and the launch-channel funnel). But per [[project_next_venture_decision]] and the 8/11 journal itself: gameday + practice tools are due "by football," the Lakeville pilot is live, and new-idea displacement is the named failure mode. **Decision: no build before the Dugout Edge football deadline.** Revisit the week after gameday + practice ship. Until then the only permitted expenditure is dogfooding the routine and (optionally) drafting one "dead butt syndrome" article to test the content funnel — it serves beaubranton.com either way.

**Portfolio position (asked directly 2026-08-11: "pursue this over my other ideas?"):** Not *over* — *after*. DE is an asset (revenue, pilot, dated deadline), not an idea; and the momentum block (QA, babysitting AI, marketing) is product-agnostic — it follows any switch, and the $5K hire is its fix. But this idea filters better than hats/Joe/books and Beau is the customer daily, so it **jumps the new-idea queue** conditional on three tests after football ships: (1) gameday + practice shipped, (2) still wants it after ~4 weeks parked, (3) dogfood + one test article showed signal. Three yeses → this is the next build.
