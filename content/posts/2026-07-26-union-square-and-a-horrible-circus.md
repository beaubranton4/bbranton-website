# July 26, 2026

Union Square with Abby — mid Chinese food, a Lego set from Macy's, a horrible Circus Bella show. Tennis with Jess and Nick, then Han Il Kwan for Korean.

---

## Workout

Tennis with Jess and Nick.

| Activity | Duration | Est. burn |
|---|---|---|
| Tennis (recreational) | ~1 hr* | ~450 cal* |

*\*Duration assumed ~1 hour — tell me the real number and I'll fix it. Burn estimated at 170 lb; context only, not something to eat back on top of the training-day target.*

*No `widget:workout` block: `scripts/extract-widgets.mjs` only understands weight × reps sets, so court time has no schema yet.*

---

## Calorie Log

| Food | Amount | Calories | Protein |
|---|---|---|---|
| Hainanese chicken & rice + rice noodles | 1 meal | 800 | ~45 g* |
| Korean dinner — galbi jjim, mandu, cold noodles (Han Il Kwan) | 1 meal | 1,000 | ~60 g* |
| **Total** | | **~1,800** | **~105 g** |

*\*Both calorie numbers are yours. Protein is estimated: Hainanese chicken rice assumed a full poached-chicken portion (~45 g) — the rice and rice noodles add almost none. Korean dinner assumed galbi jjim carrying most of the protein (~40 g), mandu ~12 g, naengmyeon ~8 g; if you got more short rib than that, it's higher.*

**Day vs. plan:** ~1,800 cal / ~105 g protein on a training day (tennis) — target ~2,400 cal / ~145 g protein from `data/profile.yml`, so **~600 cal under and ~40 g short on protein**, which is also below the protein floor in that file. Only two meals on the day, so the calorie gap makes sense; the protein miss is the recurring one — that's three days running under the floor.

```widget:calorielog
person: Beau
day_type: training
items:
  - { food: "Hainanese chicken & rice + rice noodles", amount: "1 meal", calories: 800, protein: 45 }
  - { food: "Korean dinner - galbi jjim, mandu, cold noodles (Han Il Kwan)", amount: "1 meal", calories: 1000, protein: 60 }
note: "Training day (tennis with Jess and Nick). Two meals only - ~600 cal under target and ~40 g short on protein, third straight day under the floor."
```
