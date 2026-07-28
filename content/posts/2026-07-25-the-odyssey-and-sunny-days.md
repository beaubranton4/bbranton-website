# July 25, 2026

Yesterday I watched The Odyssey. Incredible story. A lot of the stories I'd heard before — I think I probably just read them in school, or picked them up through mythology, Greek mythology. But great movie. I'm glad that I went to go watch it.

The weather's been extremely nice in San Francisco. Really need to take advantage of all of these sunny days in a row. Get outside, run through the park, be active, get moving. Really trying to prioritize my health recently, in the last couple of weeks — making sure I'm eating the appropriate amount of food, getting the right steps in, working out, and just overall thinking about health and longevity.

---

## Workout

Took advantage of the sun — 6-mile run plus a mile walk.

| Activity | Distance | Pace | Time |
|---|---|---|---|
| Run | 6 mi | 8:55 /mi | ~53:30 |
| Walk | 1 mi | — | — |

Roughly ~680 cal on the run and ~85 on the walk at 170 lb — context only, not something to eat back on top of the training-day target.

*No `widget:workout` block: `scripts/extract-widgets.mjs` only understands weight × reps sets, so cardio has no schema yet.*

---

## Calorie Log

| Food | Amount | Calories | Protein |
|---|---|---|---|
| Apple | 1 medium | ~95 | ~0.5 g |
| Lunch (unspecified) | 1 meal | 800 | ~35 g* |
| Beer | 7 × 12 oz | ~1,050* | ~11 g |
| Pizza | 2 slices | ~570* | ~24 g |
| Potato chips | ~20 chips | ~220 | ~2 g |
| Bacon-wrapped street dog | ½ | ~280* | ~11 g |
| **Total** | | **~3,015** | **~83.5 g** |

*\*Lunch calories are your number; protein is a blind ~35 g guess — tell me what it was and I'll fix it. Beers assumed 12 oz standard (~150 each); if they were IPAs or craft pints, add ~350–700 to the day. Pizza assumed regular cheese/pepperoni slices (~285 each). Street dog assumed a full SF-style bacon-wrapped dog with onions and sauce (~560), halved.*

**Day vs. plan:** ~3,015 cal / ~83.5 g protein on a training day (6-mile run) — target ~2,400 cal / ~145 g protein from `data/profile.yml`, so **~615 over on calories and ~62 g short on protein**, second day running below the protein floor. The beers alone were ~1,050; without them the day lands at ~1,965, under target. Per the blowout rule in the profile, one of these a month is already priced into the deficit — the run took real work off the top.

```widget:calorielog
person: Beau
day_type: training
items:
  - { food: "Apple", amount: "1 medium", calories: 95, protein: 0.5 }
  - { food: "Lunch (unspecified)", amount: "1 meal", calories: 800, protein: 35 }
  - { food: "Beer", amount: "7 x 12 oz", calories: 1050, protein: 11 }
  - { food: "Pizza", amount: "2 slices", calories: 570, protein: 24 }
  - { food: "Potato chips", amount: "~20 chips", calories: 220, protein: 2 }
  - { food: "Bacon-wrapped street dog", amount: "1/2", calories: 280, protein: 11 }
note: "Training day (6 mi run @ 8:55 + 1 mi walk). ~615 cal over, ~62 g protein short — 7 beers carried the overage."
```
