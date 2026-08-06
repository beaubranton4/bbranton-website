import Head from 'next/head';
import Link from 'next/link';
import MiniChart from '../components/MiniChart';

interface CalorieItem {
  food: string;
  amount: string | null;
  calories: number;
  protein: number;
  sodium: number | null;
}
interface CalorieDay {
  date: string;
  person: string;
  dayType: string | null;
  items: CalorieItem[];
  totals: { calories: number; protein: number; sodium: number | null };
  note: string | null;
  sourceId: string;
  target: number | null;
  delta: number | null;
  burn: number | null;
  targetSource: 'activity' | 'dayType' | null;
}
interface Props {
  days: CalorieDay[];
  proteinAim: number;
  sodiumLimit: number;
  baseTdee: number | null;
  avgCalories: number | null;
  avgProtein: number | null;
  avgSodium: number | null;
}

const DAY_TYPE_LABEL: Record<string, string> = {
  low: 'Low',
  steps_10k: '10K steps',
  training: 'Training',
};

function Tile({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="arcade-card p-4">
      <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">{label}</div>
      <div className="text-cyan-400 text-2xl font-bold">{value}</div>
      {sub && <div className="text-gray-500 text-xs mt-1">{sub}</div>}
    </div>
  );
}

export default function Health({
  days,
  proteinAim,
  sodiumLimit,
  baseTdee,
  avgCalories,
  avgProtein,
  avgSodium,
}: Props) {
  const calorieSeries = days.map((d) => ({ label: d.date.slice(5), value: d.totals.calories }));
  const proteinSeries = days.map((d) => ({ label: d.date.slice(5), value: Math.round(d.totals.protein) }));
  const sodiumDays = days.filter((d) => d.totals.sodium != null);
  const sodiumSeries = sodiumDays.map((d) => ({ label: d.date.slice(5), value: d.totals.sodium as number }));

  return (
    <>
      <Head>
        <title>Health | Beau Branton</title>
        <meta name="description" content="Calorie and protein tracking against the cut plan." />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1
          className="text-cyan-400 mb-2"
          style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '16px', lineHeight: '1.8' }}
        >
          HEALTH
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Calories, protein &amp; sodium vs. the cut plan, pulled from the journal. Targets live in{' '}
          <code className="text-cyan-400">data/profile.yml</code>.
          {baseTdee != null && (
            <>
              {' '}
              Each day&apos;s calorie target is computed as{' '}
              <span className="text-gray-400">
                {baseTdee.toLocaleString()} base TDEE + what you actually burned &minus; deficit
              </span>
              , so it moves in real increments. A <span className="text-gray-400">~</span> next to a target means no
              activity was logged that day and it fell back to the coarse day-type bucket.
            </>
          )}
        </p>

        {days.length === 0 ? (
          <div className="arcade-card p-8 text-center text-gray-400">
            No calorie data yet. Log a day and run <code className="text-cyan-400">npm run extract:widgets</code>.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <Tile label="Days logged" value={String(days.length)} />
              <Tile label="Avg calories" value={avgCalories != null ? String(avgCalories) : '—'} sub="per logged day" />
              <Tile
                label="Avg protein"
                value={avgProtein != null ? `${avgProtein} g` : '—'}
                sub={`aim ${proteinAim} g/day`}
              />
              <Tile
                label="Avg sodium"
                value={avgSodium != null ? `${avgSodium.toLocaleString()} mg` : '—'}
                sub={avgSodium != null ? `limit ${sodiumLimit.toLocaleString()} mg/day` : 'not tracked yet'}
              />
            </div>

            <section className="arcade-card p-5 mb-6">
              <h2 className="text-lg font-bold mb-1 text-cyan-400">Calories</h2>
              <p className="text-gray-500 text-xs mb-4">Daily total. Target varies by day type — see the table below.</p>
              <MiniChart data={calorieSeries} unit="" color="#22d3ee" />
            </section>

            <section className="arcade-card p-5 mb-8">
              <h2 className="text-lg font-bold mb-1 text-pink-400">Protein</h2>
              <p className="text-gray-500 text-xs mb-4">Daily total vs. the {proteinAim} g aim (pink line).</p>
              <MiniChart data={proteinSeries} target={proteinAim} targetLabel={`aim ${proteinAim} g`} unit=" g" color="#f472b6" />
            </section>

            {sodiumSeries.length > 0 && (
              <section className="arcade-card p-5 mb-8">
                <h2 className="text-lg font-bold mb-1 text-amber-400">Sodium</h2>
                <p className="text-gray-500 text-xs mb-4">
                  Daily total vs. the {sodiumLimit.toLocaleString()} mg limit (amber line) — the stricter target that
                  applies with elevated blood pressure, not the 2,300 mg general guideline. This one tracks blood
                  pressure, not weight.
                </p>
                <MiniChart
                  data={sodiumSeries}
                  target={sodiumLimit}
                  targetLabel={`limit ${sodiumLimit.toLocaleString()} mg`}
                  unit=" mg"
                  color="#fbbf24"
                />
              </section>
            )}

            <section className="arcade-card p-5">
              <h2 className="text-lg font-bold mb-4 text-cyan-400">Day by day</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-gray-500 border-b border-slate-700">
                    <tr>
                      <th className="py-2 pr-4">Date</th>
                      <th className="py-2 pr-4">Type</th>
                      <th className="py-2 pr-4 text-right">Burn</th>
                      <th className="py-2 pr-4 text-right">Calories</th>
                      <th className="py-2 pr-4 text-right">Target</th>
                      <th className="py-2 pr-4 text-right">Δ</th>
                      <th className="py-2 pr-4 text-right">Protein</th>
                      <th className="py-2 pr-4 text-right">Sodium</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {days
                      .slice()
                      .reverse()
                      .map((d) => (
                        <tr key={d.date} className="border-b border-slate-800/60">
                          <td className="py-2 pr-4">
                            <Link href={`/blog/${d.sourceId}`} className="text-cyan-400 hover:text-pink-400">
                              {d.date}
                            </Link>
                          </td>
                          <td className="py-2 pr-4">{d.dayType ? DAY_TYPE_LABEL[d.dayType] ?? d.dayType : '—'}</td>
                          <td className="py-2 pr-4 text-right text-gray-400">
                            {d.burn != null ? d.burn.toLocaleString() : '—'}
                          </td>
                          <td className="py-2 pr-4 text-right">{d.totals.calories}</td>
                          <td className="py-2 pr-4 text-right text-gray-500">
                            {d.target ?? '—'}
                            {d.targetSource === 'dayType' && (
                              <span className="text-gray-600" title="Bucketed fallback — no activity burn logged">
                                {' '}
                                ~
                              </span>
                            )}
                          </td>
                          <td
                            className={`py-2 pr-4 text-right ${
                              d.delta == null ? 'text-gray-500' : d.delta > 0 ? 'text-pink-400' : 'text-cyan-400'
                            }`}
                          >
                            {d.delta == null ? '—' : d.delta > 0 ? `+${d.delta}` : d.delta}
                          </td>
                          <td className="py-2 pr-4 text-right">
                            {Math.round(d.totals.protein)}
                            <span className={d.totals.protein >= proteinAim ? 'text-cyan-400' : 'text-gray-500'}> g</span>
                          </td>
                          <td
                            className={`py-2 pr-4 text-right ${
                              d.totals.sodium == null
                                ? 'text-gray-500'
                                : d.totals.sodium > sodiumLimit
                                  ? 'text-amber-400'
                                  : 'text-cyan-400'
                            }`}
                          >
                            {d.totals.sodium == null ? '—' : `${d.totals.sodium.toLocaleString()} mg`}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        <p className="text-gray-600 text-xs mt-8">
          Fitness math, not dietitian advice. See also <Link href="/workouts" className="text-cyan-400">Workouts</Link>{' '}
          and <Link href="/time" className="text-cyan-400">Time</Link>.
        </p>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');
  const yaml = require('js-yaml');

  const readJson = (rel: string) => {
    try {
      return JSON.parse(fs.readFileSync(path.join(process.cwd(), rel), 'utf8'));
    } catch {
      return [];
    }
  };

  const calorie: any[] = readJson('data/widgets/calorie.json');
  const activity: any[] = readJson('data/widgets/activity.json');

  let profile: any = {};
  try {
    profile = yaml.load(fs.readFileSync(path.join(process.cwd(), 'data/profile.yml'), 'utf8')) || {};
  } catch {
    profile = {};
  }

  const beau = profile?.people?.beau ?? {};
  const calorieTargets = beau.calorie_targets ?? {};
  const proteinAim = beau?.protein?.aim_g ?? 145;
  const sodiumLimit = beau?.sodium?.limit_mg ?? 1500;
  const baseTdee = beau?.energy?.base_tdee ?? null;
  const deficit = beau?.clean_day_deficit ?? 0;

  // Total burn per date, from widget:activity blocks.
  const burnByDate = new Map<string, number>();
  for (const a of activity) {
    burnByDate.set(a.date, (burnByDate.get(a.date) ?? 0) + (a.totalBurn ?? 0));
  }

  const days = calorie.map((d: any) => {
    const burn = burnByDate.has(d.date) ? (burnByDate.get(d.date) as number) : null;
    // Prefer the computed target (base TDEE + what was actually burned - deficit).
    // Fall back to the coarse day-type bucket only when no activity was logged.
    let target: number | null = null;
    let targetSource: 'activity' | 'dayType' | null = null;
    if (baseTdee != null && burn != null) {
      target = Math.round(baseTdee + burn - deficit);
      targetSource = 'activity';
    } else if (d.dayType && calorieTargets[d.dayType] != null) {
      target = calorieTargets[d.dayType];
      targetSource = 'dayType';
    }
    const delta = target != null ? d.totals.calories - target : null;
    return { ...d, target, delta, burn, targetSource };
  });

  const avg = (vals: number[]) => (vals.length ? Math.round(vals.reduce((a, v) => a + v, 0) / vals.length) : null);
  const avgCalories = avg(days.map((d: any) => d.totals.calories));
  const avgProtein = avg(days.map((d: any) => d.totals.protein));
  // Average only over days that actually tracked sodium, so early untracked days
  // don't drag the number toward zero.
  const avgSodium = avg(
    days.filter((d: any) => d.totals.sodium != null).map((d: any) => d.totals.sodium as number)
  );

  return { props: { days, proteinAim, sodiumLimit, baseTdee, avgCalories, avgProtein, avgSodium } };
}
