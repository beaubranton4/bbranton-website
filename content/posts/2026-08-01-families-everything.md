# August 1, 2026

Really been enjoying having my parents around. Grabbing dinner with them the last couple of nights. Having dinner with the Mahias and San Mateo at Hinoari. Just good times. It's fun to see the family coming together and getting along. Family's everything.

Going for my long run and going to spend the rest of the day with them. Hanging out with Uncle Ricardo and Auntie Patty. Going to Skoma's. Walk around a few neighborhoods. Just relax. And then tomorrow we'll do Point Reyes.

Almost finished with Dorohedoro. It's really getting a little bit out there. I feel like I love stories and plot lines for like the first three fourths, and then the grand reveal, the grand big twist, is just a little bit too outrageous for me. A little bit too unrealistic. That's kind of what's happening with Dorohedoro. It makes you think that it's like party A versus party B, party B is the enemy — but then there's actually a party C that's the true enemy, and party A and party B team up against party C. But then party C kind of came out of nowhere inexplicably in the last like 20 chapters. I don't know how well done it was for me. But don't get me wrong on the story — I'm glad I'm finishing it up.

Had a good talk with Bill yesterday. Biggest takeaway for me is that I need to start being more intentional about my time, tracking my time, and being committed. I can say it's not for me, but I mean — you can't improve what you don't measure. So I really should start tracking how I spend my time on Dugout Edge, how I spend my days. I wonder how deep I go down that rabbit hole, if I just do a high level. Just like I'm doing for calorie tracking, workout tracking, journaling — but it makes it super easy with LLMs, Claude Code. So maybe that's a new skill I need to start building out.

---

## To Do

- [ ] Schedule a doctor's appointment
- [ ] Look into Facebook Marketplace ads and test them out
- [ ] Learn Heroku or Railway — somewhere to autonomously run agents
- [ ] Pick a model provider (pay for an LLM API, or run an open-source model)
- [ ] Look into Buzz

```widget:todo
person: Beau
items:
  - { text: "Schedule a doctor's appointment", done: false }
  - { text: "Look into Facebook Marketplace ads and test them out", done: false }
  - { text: "Learn Heroku or Railway - somewhere to autonomously run agents", done: false }
  - { text: "Pick a model provider (pay for an LLM API, or run an open-source model)", done: false }
  - { text: "Look into Buzz", done: false }
```

---

## Workout

Long run — 6 miles — plus a full day on foot: **~18,000 steps** across Macy's returns, Strawberry Hill, and the Ocean Beach sunset.

| Activity | Duration | Est. burn |
|---|---|---|
| Run — 6 mi | ~54 min* | ~750 cal* |
| Walking — rest of the ~18K steps (~7K beyond the run) | all day | ~210 cal* |
| **Total** | | **~960 cal** |

*\*Pace wasn't given, so the run assumes ~9:00/mi (~11 MET at 170 lb) — tell me the real time and I'll fix it. The run itself covers roughly 11K of the 18K steps; only the ~7K beyond it are counted as walking burn, to avoid double-counting.*

```widget:activity
person: Beau
activities:
  - { activity: "Run - 6 mi", duration: "54 min", burn: 750 }
  - { activity: "Walking - rest of ~18K steps beyond the run", duration: "all day", burn: 210 }
steps: 18000
note: "6-mile run (pace assumed ~9:00/mi) plus a full day on foot. Walking line counts only the ~7K steps beyond the run to avoid double-counting. Backfilled 2026-08-05."
```

---

## Calorie Log

| Food | Amount | Calories | Protein | Sodium |
|---|---|---|---|---|
| Apple | 1 medium | ~95 | ~0.5 g | ~2 mg |
| Peanut butter | 1 tbsp | ~95 | ~4 g | ~75 mg |
| Seafood trio (Scoma's) | 1 | ~700* | ~50 g* | ~1,300 mg* |
| Bread with butter | 1 slice | ~150 | ~3 g | ~200 mg |
| Calamari appetizer (shared) | some | ~150* | ~8 g* | ~300 mg* |
| Grilled ahi sandwich (Hook Fish Co) | 1 | 600 | ~40 g* | ~900 mg* |
| Chips & guac | 1 serving | 200 | ~3 g | ~200 mg |
| Beer | 1 | ~150 | ~1.5 g | ~10 mg |
| **Total** | | **~2,140** | **~110 g** | **~2,987 mg** |

*\*Backfilled 2026-08-05. The three Scoma's lines are an allocation of your ~1,000 total for that meal — trust the meal total over any single line. Seafood trio assumed a fried/sautéed mix, which is where the sodium comes from. Ahi sandwich calories are yours; ahi is lean, so the protein runs high for the calories.*

**Day vs. plan:** ~2,140 cal / ~110 g protein / ~2,987 mg sodium. With the 6-mile run + walking (~960 cal burned), the computed target is **~2,760** (base TDEE 2,060 + 960 − 260 deficit, per `data/profile.yml`).

- **Calories** — **~620 under** target. A Scoma's lunch, a sandwich dinner, and a beer, and the day still ran a real deficit — that's what a 6-miler plus 18K steps buys.
- **Protein** — ~110 g, ~13 g under the ~123 g floor. Close, and the seafood did most of the work.
- **Sodium** — ~2,987 mg, ~1,487 over the limit. Two restaurant meals; the known family-day trade.

```widget:calorielog
person: Beau
day_type: training
items:
  - { food: "Apple", amount: "1 medium", calories: 95, protein: 0.5, sodium: 2 }
  - { food: "Peanut butter", amount: "1 tbsp", calories: 95, protein: 4, sodium: 75 }
  - { food: "Seafood trio (Scoma's)", amount: "1", calories: 700, protein: 50, sodium: 1300 }
  - { food: "Bread with butter", amount: "1 slice", calories: 150, protein: 3, sodium: 200 }
  - { food: "Calamari appetizer (shared)", amount: "some", calories: 150, protein: 8, sodium: 300 }
  - { food: "Grilled ahi sandwich (Hook Fish Co)", amount: "1", calories: 600, protein: 40, sodium: 900 }
  - { food: "Chips & guac", amount: "1 serving", calories: 200, protein: 3, sodium: 200 }
  - { food: "Beer", amount: "1", calories: 150, protein: 1.5, sodium: 10 }
note: "Backfilled 2026-08-05. ~2,140 cal / ~110 g protein / ~2,987 mg sodium vs a ~2,760 computed target (6-mi run + 18K steps, ~960 burned) - about 620 under. Protein ~13 g shy of the floor; sodium ~1,487 over on two restaurant meals."
```
