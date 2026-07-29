# July 28, 2026

Got my first "sales call" on Thursday with Ryan from Lakeville Baseball Association — a club with 200+ teams, pre-K all the way through travel ball to 65+ men's leagues. Incredible opportunity to get my foot in the door with bigger clientele, understand their pain points, and get the chance to build something for them. Even if this one doesn't turn into anything, it's good experience just to talk to someone face to face and see how I like it. Debating whether to do a quick prep call first — get some tips from Bill or Mr. Mejia — or just go in and trust my own instincts on what I need to get out of it.

Also been on a bit of a shopping grind lately. I get into these fits where I don't buy anything for years — clothes, shoes, sunglasses — then go all in for a week and just start buying shit. I'm in one of those weeks right now. I'll probably end up returning a lot of it; that's where the real overshopping happens, since online returns make it so easy to order and send back. Spent over $2,000 on clothes so far, and now I've got a pile of hemming to do. Wouldn't call it a waste of money — I'm getting good deals on affordable stuff — more a waste of time. Also managed to lose my beloved Cotopaxi jacket (the one they don't make anymore) trying on clothes at Macy's. Bought new clothes, lost an old favorite. Maybe I just replace it with a nice Montbell. Who knows.

One of the most addicting feelings in the world for me is the feeling of being productive. Being able to look back, compare yourself then versus now, and see progress — whether that's in health, a skill, or anything that can be measured and quantified, qualitatively or quantitatively, as improvement — that is an addicting feeling.

I think one of the biggest problems people have with health, regarding diet and fitness, is decision paralysis. It's extremely taxing on your mind to have to come up with a plan every single day — what workouts do I need, what do I have to eat, how many calories. It's mentally exhausting, and I think if you can eliminate that and simplify as much as possible, a lot of people will be a lot healthier. For example, if you just told someone all they need to do is go into the gym, do the same five exercises three times a week, and every time increase the weight by one pound, that'll beat 95% of people's workout plans. It's like investing in the S&P 500 — the simplest, most straightforward method of investing, and it beats 99% of all other strategies. Simple is better. Simple is beautiful. Simplicity is the ultimate form of mastery.

---

## To Do

- [ ] Decide: quick prep call before Thursday (maybe Bill or Mr. Mejia) or go in solo
- [ ] Prep for Thursday's call with Ryan — Lakeville Baseball Association, 200+ teams pre-K through 65+ men's leagues

---

## Workout

| Activity | Duration | Est. burn |
|---|---|---|
| Run — 3 mi @ 7:50/mi, 1 mi @ 9:30/mi | ~33 min | ~495 cal* |
| Walk — ~1.5 mi | ~30 min* | ~125 cal* |

*\*Burn estimated from MET values at 170 lb (run ~12.3 MET for the 7:50 pace, ~10.0 MET for the 9:30 mile; walk ~3.3 MET). Walk duration assumed ~20 min/mile since no pace was given — tell me the real time and I'll fix it.*

*No `widget:workout` block — that schema is weight × reps only. The burn lives in the `widget:activity` block below, which is what feeds the computed calorie target.*

```widget:activity
person: Beau
activities:
  - { activity: "Run - 3 mi @ 7:50/mi", duration: "24 min", burn: 375 }
  - { activity: "Run - 1 mi @ 9:30/mi", duration: "9.5 min", burn: 120 }
  - { activity: "Walk - ~1.5 mi", duration: "30 min", burn: 125 }
note: "Burn estimated from MET values at 170 lb. Walk duration assumed ~20 min/mile."
```

---

## Calorie Log

| Food | Amount | Calories | Protein |
|---|---|---|---|
| Boiled egg | 2 large | ~156 | ~12.6 g |
| Apple | 1 medium | ~95 | ~0.5 g |
| Peanut butter | 2 tbsp | ~190 | ~8 g |
| Turkey spaghetti, whole wheat pasta (leftover) | 1 bowl | 700 | ~45 g* |
| Salmon, air-fried | 1 lb raw | ~930 | ~91 g* |
| Oil & seasonings (salt, pepper, garlic powder, onion powder) | ½ tbsp oil | ~65 | ~0 g |
| Bang bang sauce (Greek yogurt, mayo, chili sauce, sriracha, rice vinegar) | ~4 tbsp total | ~95 | ~2.3 g* |
| Cherries | 20 | ~93 | ~1.6 g |
| **Total** | | **~2,324** | **~161 g** |

*\*Lunch calorie number is yours; protein estimated assuming a similar mix to the 7/27 bowl (~45 g). Salmon estimated from raw weight (~205 cal / ~20 g protein per 100 g) — if it was 1 lb post-cook, actual intake is somewhat higher. Bang bang sauce protein comes almost entirely from the 1.5 tbsp Greek yogurt.*

**Day vs. plan:** 4-mile run + 1.5-mile walk, ~620 cal burned. Computed target is ~2,420 cal (base TDEE 2,060 + 620 burned − 260 deficit, per `data/profile.yml`). Full day lands at **~2,324 cal / ~161 g protein** — ~96 under target, so a genuine deficit day, and protein well past the ~145 g aim. That pound of salmon did a lot of the work. Sodium wasn't tracked this day; the salmon seasoning and bang bang sauce would have put it well over the 1,500 mg limit.

```widget:calorielog
person: Beau
day_type: training
items:
  - { food: "Boiled egg", amount: "2 large", calories: 156, protein: 12.6 }
  - { food: "Apple", amount: "1 medium", calories: 95, protein: 0.5 }
  - { food: "Peanut butter", amount: "2 tbsp", calories: 190, protein: 8 }
  - { food: "Turkey spaghetti, whole wheat pasta (leftover)", amount: "1 bowl", calories: 700, protein: 45 }
  - { food: "Salmon, air-fried", amount: "1 lb raw", calories: 930, protein: 91 }
  - { food: "Oil & seasonings", amount: "1/2 tbsp oil", calories: 65, protein: 0 }
  - { food: "Bang bang sauce", amount: "~4 tbsp total", calories: 95, protein: 2.3 }
  - { food: "Cherries", amount: "20", calories: 93, protein: 1.6 }
note: "Training day (4 mi run + 1.5 mi walk, ~620 cal burned). ~2,324 cal / ~161 g protein - right on the calorie target, protein well past the aim."
```
