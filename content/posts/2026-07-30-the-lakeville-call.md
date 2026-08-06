# July 30, 2026

Today I have my sales call to discuss league pricing with Lakeville Baseball Association with Ryan. I'm a little bit skeptical about what his intentions are — if he really wants to purchase the software for his entire league, or if he has alternative motives. The alternative motive that I could see is that he wants to get Dugout Edge for free in exchange for promoting the service throughout the entire league, throughout anybody he meets in the baseball or softball world.

The key points that I need to make to him:

1. I just need to show off the tool — really explain and impress him with all the capabilities, what I've done and what I'm going to be doing going forward in the next couple of months.
2. I need to show him that it's right for an entire league full of coaches. Emphasize the coaching aspect — it's for these coaches that raised their hand, and for coaches who know what they're doing, they're just time-saving tools.
3. What I really want to get into is this league operating system, where I'll create the schedules, help league admins manage fields, practice time, playing time with different facilities, maybe even a booking system. That's what I really need to show Ryan today.

Then I need to ask him: what does he do, what is it that coaches want, why he thinks Dugout Edge might be a good fit, where he sees — from what he's seen — Dugout Edge being most helpful, and out of the new features that I'm developing, if any of those sound exciting to him.

And then, on the more sales aspect of the call, going more into: is he the one who would make the purchasing decision for the software? If not, who would that be, and can I get them on the phone?

So that's a big thing today. This has been my stressful part of the week, I've just kind of been thinking about this — but in reality it hasn't been too stressful. I think there are certain things where, by the amount of effort I want to put in and the amount of stress that I feel — when I have like an interview or a presentation — I don't have that with this. I think because I know this is going to be kind of a preliminary call. It's not make or break for my business. $750 is a good chunk of change, but it's nothing to cry home about. It's not like a $10,000 deal that would really set me up in Dugout Edge if I could make the deal.

So that's where my head's at. I'm looking forward to seeing how it goes, and I'm looking forward to just getting experience talking with people. I really need to take this as an opportunity to collect user feedback. I'm talking to a real league admin who knows a whole bunch of coaches, who's in organized baseball — they're in the biggest of them all.

---

## Workout

Sprint session — did get it in.

| Activity | Duration | Est. burn |
|---|---|---|
| Warm-up jog — ~0.5 mi | ~5 min* | ~55 cal* |
| Sprints — 8 × 50 yd, 2 × 100 yd (walk-back recovery) | ~20 min* | ~170 cal* |
| Walk home — ~0.5 mi | ~10 min* | ~45 cal* |
| **Total** | **~35 min** | **~270 cal** |

*\*Burn estimated from MET values at 170 lb. The sprint block is the loose number: ~82 seconds of actual sprinting at ~23 MET is only ~45 cal, and most of the rest is the walk-back recovery plus a modest afterburn bump. Durations assumed — give me the real clock time and rest intervals and I'll redo it. ~8,000 steps on the day, which is only slightly above the walking already baked into the 2,060 base TDEE, so it doesn't get its own line.*

*No `widget:workout` block — that schema is weight × reps only. The burn lives in the `widget:activity` block below, which is what feeds the computed calorie target.*

```widget:activity
person: Beau
activities:
  - { activity: "Warm-up jog - ~0.5 mi", duration: "5 min", burn: 55 }
  - { activity: "Sprints - 8x50 yd, 2x100 yd (walk-back recovery)", duration: "20 min", burn: 170 }
  - { activity: "Walk home - ~0.5 mi", duration: "10 min", burn: 45 }
steps: 8000
note: "Sprint session. Burn estimated from MET values at 170 lb; durations assumed. ~8,000 steps on the day."
```

---

## Calorie Log

| Food | Amount | Calories | Protein | Sodium |
|---|---|---|---|---|
| Parachute Bakery mushroom & cheese savory pastry | 1 | ~450* | ~13 g* | ~600 mg* |
| Strawberries | ~8 | ~40 | ~0.8 g | ~1 mg |
| Blueberries | 20 berries | ~16 | ~0.2 g | ~0 mg |
| Souvla chicken salad, Greek style w/ fries in it | ⅖ of one (the rest of yesterday's) | ~310* | ~18 g* | ~640 mg* |
| Señor Sisig tocilog burrito | ½ | ~480* | ~23 g* | ~1,100 mg* |
| Cherries | 10 | ~46 | ~0.8 g | ~0 mg |
| Bibimbap | ~⅓ bowl | ~235* | ~10 g* | ~430 mg* |
| Soy garlic chicken wings (Korean fried) | 3 | ~375* | ~24 g* | ~810 mg* |
| Mandu | 2 | ~130* | ~5 g* | ~320 mg* |
| Ice cream sandwich (cookie) | ½ | ~210* | ~3 g* | ~130 mg* |
| **Total** | | **~2,292** | **~98 g** | **~4,031 mg** |

*\*The pastry is a loose number. Craft-bakery savory pastries are laminated dough — a lot of butter — and a mushroom-and-cheese filling adds fat and salt on top. Range is realistically ~380–550 cal depending on size. The Souvla line is scaled off yesterday's estimate for the full salad (~780 cal / ~45 g protein / ~1,600 mg sodium). The burrito is a tocilog — tocino, garlic fried rice, and egg. The cured sweet pork and the fried rice are why the calories and sodium run high relative to the protein; a full one is estimated at ~960 cal / ~45 g protein / ~2,200 mg sodium.*

*\*The Korean dinner is family style, so every line is a portion estimate off a shared dish. Full bibimbap assumed ~700 cal / ~30 g protein / ~1,300 mg sodium, taken at a third. Soy garlic wings are double-fried and glazed — ~125 cal each, and the glaze is where the sodium comes from. The dessert is half a cookie-style ice cream sandwich, estimated off a whole one at ~420 cal; the thin wafer kind would be closer to ~80 for a half.*

**Day vs. plan:** ~2,292 cal / ~98 g protein / ~4,031 mg sodium. The sprint session came in at ~270 cal burned, not the ~345 the morning estimate assumed, so the computed target is **~2,070** (base TDEE 2,060 + 270 burned − 260 deficit, per `data/profile.yml`).

- **Calories** — **~222 over** target. Close enough to be noise given how much of this day is portion estimates off shared dishes. Dinner ran ~740 before dessert, which fit fine; the half ice cream sandwich is what tipped it.
- **Protein** — ~98 g, **~25 g below the ~123 g floor** and ~47 short of the ~145 g aim. This is the real miss of the day, not the calories. Nothing in the food log was a protein anchor — the wings were the only meaningful source, and a third of a bibimbap doesn't move it. A sprint day under the floor is the combination that costs muscle on a cut.
- **Sodium** — ~4,031 mg, **~2,531 over** the 1,500 mg limit. Third straight day over. Restaurant food three meals running is the mechanism; the wing glaze and the burrito are the two biggest single items. Nothing about the sprint offsets this — sodium shows up as blood pressure and water weight on the scale, not as fat.

```widget:calorielog
person: Beau
day_type: training
items:
  - { food: "Parachute Bakery mushroom & cheese savory pastry", amount: "1", calories: 450, protein: 13, sodium: 600 }
  - { food: "Strawberries", amount: "~8", calories: 40, protein: 0.8, sodium: 1 }
  - { food: "Blueberries", amount: "20 berries", calories: 16, protein: 0.2, sodium: 0 }
  - { food: "Souvla chicken salad, Greek style w/ fries in it", amount: "2/5 of one (rest of yesterday's)", calories: 310, protein: 18, sodium: 640 }
  - { food: "Senor Sisig tocilog burrito", amount: "1/2", calories: 480, protein: 23, sodium: 1100 }
  - { food: "Cherries", amount: "10", calories: 46, protein: 0.8, sodium: 0 }
  - { food: "Bibimbap", amount: "~1/3 bowl", calories: 235, protein: 10, sodium: 430 }
  - { food: "Soy garlic chicken wings (Korean fried)", amount: "3", calories: 375, protein: 24, sodium: 810 }
  - { food: "Mandu", amount: "2", calories: 130, protein: 5, sodium: 320 }
  - { food: "Ice cream sandwich (cookie)", amount: "1/2", calories: 210, protein: 3, sodium: 130 }
note: "Korean family-style dinner closed the day at ~2,292 cal / ~98 g protein / ~4,031 mg sodium. Sprint session burned ~270 cal, so target was ~2,070 - about 222 over. Protein is the real miss: ~25 g below the 123 g floor and ~47 short of the 145 g aim, with no protein anchor all day. Sodium ~2,531 mg over the 1,500 mg limit, third straight day over."
```
