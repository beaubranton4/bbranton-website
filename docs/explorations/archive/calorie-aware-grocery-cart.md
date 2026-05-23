# Calorie Cart — Grocery Calorie Ticker + Meal Planner

> **Working name: Calorie Cart.** Name validation 2026-05-21: DataForSEO returned zero results for "calorie cart" as a search term, and a web search confirmed no existing product uses the name. The domain is likely available. Name does double-duty: cart-as-grocery-cart + cart-as-rolling-utility. Beau's pick.

## Verdict (2026-05-21, refreshed)

**The wedge product (Chrome extension) is novel, unowned, and personally tested by Beau. The meal-planner adjacency is crowded but the in-cart live-calorie pattern is genuinely empty white space.**

The SEO arbitrage is real on the planner side (KD 4–6 on long-tail meal-planner keywords), but the *product-concept* search demand is near zero — nobody is searching for "calorie counter for my Amazon Fresh cart" because they don't know it could exist. This is classic latent demand: the user feels the pain (closing the Amazon Fresh tab to switch to MyFitnessPal, looking up calories item by item, giving up), but doesn't have a name for the solution.

Build the Chrome extension first (cart ticker), use the planner SEO long-tail to drive distribution, and the rest of the product unfolds from there.

## The two products inside Calorie Cart

1. **Cart calorie ticker (Chrome extension)** — *the wedge.* Sits on Whole Foods, Amazon Fresh, Instacart, Kroger. As items are added/removed, shows running cart total: calories, macros, % of daily/weekly budget consumed. Warns when projected over.
2. **Meal plan → cart auto-fill (web app)** — *the upsell.* Input weekly calorie target + meal count → AI generates breakfast/lunch/dinner → swap meals → diff against pantry → populate retailer cart with all needed ingredients.

The first is novel and ownable. The second is a crowded space (PlateJoy, Mealime, Eat This Much) but becomes defensible *once you own the cart layer*.

## Keyword research

### The two-cluster picture

**Cluster A — Product-concept search demand: ~zero.** People are not typing "calorie cart" or "grocery calorie tracker" or "instacart calorie counter." Classic latent demand — same shape as Honey/Rakuten before browser-extension cashback became a category.

DataForSEO calls returning 0 results (2026-05-21):
- "calorie cart" → 0 items
- "grocery calorie tracker" → 0 items

This is good news for **naming and brand defensibility** (no incumbent) and bad news for **direct SEO acquisition** (no search traffic exists for the concept yet).

**Cluster B — Adjacent meal-planner outcome demand: massive + underserved long-tail.**

| vol | kd | competition | keyword |
|---:|---:|---:|---|
| 40,500 | 60 | MEDIUM | meal planner |
| 40,500 | 26 | LOW | mediterranean diet meal planner |
| 33,100 | 24 | LOW | keto meal planner |
| 27,100 | 23 | LOW | carnivore diet meal planner |
| 14,800 | 11 | LOW | low carb meal planner |
| 12,100 | **6**  | LOW | **1200 calorie meal planner** |
| 5,400  | **4**  | LOW | **whole foods meal planner** |
| 4,400  | — | LOW | 2000 calorie meal planner |

The **KD-4-to-6 long-tails are the bottom of the funnel** — buyer intent, almost no SEO competition. These are the doors into the brand: a `calorie-cart.com/1200-calorie-meal-planner` page that *actually generates a 1200-cal plan + auto-fills the cart* would convert because nothing else on Google's page does that today.

### Cluster C — Calorie-tracker keyword space (validated 2026-05-21)

Already pulled in an earlier session — top 15 by recent 3-month demand:

| recent | reported | kd | yr% | intent | keyword |
|---:|---:|---:|---:|---|---|
| 33,566 | 27,100 | 56 | -18 | commercial | best calorie tracker apps |
| 31,100 | 27,100 | 89 | — | informational | calorie tracker free app |
| 29,100 | 27,100 | 64 | -33 | informational | calorie tracker apps |
| 27,100 | 22,200 | 84 | — | transactional | calorie tracker |
| 19,100 | 14,800 | 40 | -33 | informational | calorie tracker myfitnesspal |
| 14,800 | 14,800 | 29 | — | transactional | calorie tracker to gain weight |
| 4,126 | 1,500 | **15** | **+60,400** | transactional | noom calorie tracker (anomaly base) |
| 1,500 | 1,500 | 63 | +48 | transactional | **ai calorie tracker** |
| 1,200 | — | **5** | -46 | informational | chipotle calorie tracker |
| 1,066 | — | **5** | -16 | transactional | dominos calorie tracker |
| 1,060 | 1,060 | 59 | +126 | transactional | cal ai calorie tracker (specific product) |

**Read:** the broad "calorie tracker" market is brutally competitive (avg KD 66, dominated by MyFitnessPal/Lose It/LifeSum). But two interesting signals:

1. **Restaurant-specific trackers (chipotle, dominos) at KD 5** prove there's real demand for "in-context calorie info" — same intent shape as "in-grocery-cart calorie info." Nobody owns these but they have real volume.
2. **"AI calorie tracker" is growing +48% yearly** (KD 63 though). The Cal AI product is growing +126%. AI-mediated calorie tracking is having a moment.

## Competitive landscape (web search validated 2026-05-21)

Web search confirmed: **no existing product owns the "live cart-level calorie ticker across retailers" pattern.** The closest players solve adjacent problems:

| Player | What they do | Why it's not a Calorie Cart competitor |
|---|---|---|
| **MyFitnessPal** | Calorie tracker, barcode scan, 14M+ food DB | You scan items AFTER buying. No in-cart math. No retailer integration. |
| **Foodvisor** | AI photo of meal → calories | Meal-time, not shop-time. Doesn't see your cart. |
| **SnapCalorie** | AI photo calorie counter | Same as Foodvisor. |
| **MyNetDiary** | Free calorie counter | Same pattern. |
| **Kroger OptUp** | Nutrition scoring for items you bought at Kroger | Retailer-owned, single-retailer, retroactive (post-checkout). |
| **Safeway Sincerely Health** | Nutrition info at Safeway | Same as OptUp. Single retailer, no cross-cart math. |
| **PlateJoy** (Hims & Hers, 2024) | Meal plan → Instacart cart | Single retailer, planner-first, subscription-walled. |
| **Mealime** | Meal plans → grocery list export | List export only. No back-channel cart visibility. |
| **Whisk / Samsung Food** | Recipe → cart | Recipe-centric, not calorie-budget centric. |
| **Amazon Fresh "Add to Cart"** | One-click recipe ingredients | No calorie awareness in cart. |
| **Fooducate / Yuka** | Barcode → nutrition rating | In-store, no cart math. |

**The actual product gap:** a neutral, multi-retailer (Whole Foods + Amazon Fresh + Instacart + Kroger) Chrome extension that overlays live calorie/macro totals on your cart. **This does not exist.**

## Why the cart-ticker wedge is genuinely strong

- **Buildable solo in 2–4 weeks.** Chrome extension + nutrition DB lookup. USDA FoodData Central is free; Edamam/Spoonacular for branded items at scale.
- **No retailer cooperation needed.** Scrapes the cart DOM the same way Honey/Rakuten do, the same way Capital One Shopping, PayPal Honey, Karma do. Established pattern, lots of prior art for legal/ToS questions.
- **Sharp pain point — Beau has it.** People on a cut obsessively count, and the grocery decision (especially online grocery) is where 80% of the calorie game is won or lost.
- **GLP-1 tailwind.** ~13M US users on Ozempic/Mounjaro/Wegovy as of 2026 — these users have to hit specific protein/calorie targets and they're the most motivated calorie-counter cohort in modern history.
- **Demo value.** "Watch — I'm adding items and the ticker is going up. It's about to warn me." That demo plays on TikTok. Honey grew this way.
- **Natural upsell ladder.** Cart ticker → meal plan → auto-fill cart → premium subscription. Each step has higher willingness to pay.

## Why the full meal-planning product is hard (on its own)

- PlateJoy/Mealime/Eat This Much own the meal-planner mindshare and SEO
- Pantry tracking ("I already have this") is the UX swamp every meal-planner has drowned in
- Retailer integrations break constantly — Amazon Fresh, Whole Foods, Instacart, Kroger all have hostile or changing APIs
- The calorie/nutrition database for branded items is messy and getting comprehensive coverage costs real $$

**But:** the planner doesn't have to be the entry. The cart extension is. Once users trust the cart math, the planner is a 5x easier sell because they're already in your habit.

## MVP sketch

**Week 1–2:** Chrome extension for Whole Foods cart (single retailer to start)
- Reads cart items via DOM scrape
- Maps each item to USDA FoodData Central + Open Food Facts
- Shows running totals: calories, protein, carbs, fat
- Settings: daily/weekly target, alert thresholds

**Week 3–4:** Expand to Amazon Fresh and Instacart
**Week 5+:** Add "Save this cart as a meal plan" (export to PDF, share via link)
**Month 2+:** Auth + cloud sync, premium subscription, meal-plan generation

Distribution plan:
- SEO: build `calorie-cart.com/1200-calorie-meal-planner`, `/whole-foods-meal-planner`, `/2000-calorie-meal-planner` — each one a real generator that outputs a plan + asks "want to auto-fill your cart? install the extension"
- Reddit: r/loseit, r/intermittentfasting, r/keto, r/glp1 — show the cart ticker demo
- TikTok: cart ticker demos are visual and emotional
- Affiliate: nutrition coaches, GLP-1 telehealth providers

## Why this gets ranked higher than I gave it credit for

- The Chrome extension is a *demo product* — once Beau has it on his own grocery shopping for a week, it sells itself
- The name (Calorie Cart) is open, available, memorable
- The wedge keyword space (KD 4–6 long-tails) is genuinely unowned
- The 2026 GLP-1 tailwind is real and recent and large
- The build is small enough to ship in a month while learning if anything sticks

## Open questions

- USDA covers raw ingredients; branded packaged items need Edamam (~$0.001/req) or Spoonacular. Build vs. buy?
- Whole Foods online (via Amazon) is the same as Amazon Fresh — should that be the *first* retailer (technical commonality) or should the brand-fit (Whole Foods) lead?
- Cart-DOM scraping has prior art (Honey) but retailers may push back. ToS risk assessment.
- Is the wedge buyer the "cutter" (calorie-restricted, athletic) or the "GLP-1 user" (protein-prioritized)? Could go either way; messaging would differ.
- If MyFitnessPal or Instacart ships v1 of in-cart calories, how is Calorie Cart different? (Answer: multi-retailer, no log-in to retailer, just install + go — but worth pre-thinking.)

## Sources

- DataForSEO API calls (2026-05-21, this session)
- [OptUp - Kroger](https://www.kroger.com/health/nutrition/optup)
- [Safeway Sincerely Health](https://www.safeway.com/health/nutrition.html)
- [MyFitnessPal](https://www.myfitnesspal.com/)
- [Foodvisor](https://play.google.com/store/apps/details?id=io.foodvisor.foodvisor&hl=en)
- [SnapCalorie](https://play.google.com/store/apps/details?id=com.snapcalorie.alpha002&hl=en_IN)
- [MyNetDiary](https://www.mynetdiary.com/)
- [The 8 Best Calorie Counter Apps - Healthline](https://www.healthline.com/nutrition/best-calorie-counters)
- [Free Calorie Tracking Apps - Amy Food Journal](https://www.amyfoodjournal.com/blog/free-calorie-tracking-apps-no-subscription)

*Session cost: ~$0.03 across keyword pulls + 1 WebSearch call*
