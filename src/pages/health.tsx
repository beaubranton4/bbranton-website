import Head from 'next/head';
import Link from 'next/link';
import MiniChart from '../components/MiniChart';

interface CalorieItem {
  food: string;
  amount: string | null;
  calories: number;
  protein: number;
}
interface CalorieDay {
  date: string;
  person: string;
  dayType: string | null;
  items: CalorieItem[];
  totals: { calories: number; protein: number };
  note: string | null;
  sourceId: string;
  target: number | null;
  delta: number | null;
}
interface Props {
  days: CalorieDay[];
  proteinAim: number;
  avgCalories: number | null;
  avgProtein: number | null;
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

export default function Health({ days, proteinAim, avgCalories, avgProtein }: Props) {
  const calorieSeries = days.map((d) => ({ label: d.date.slice(5), value: d.totals.calories }));
  const proteinSeries = days.map((d) => ({ label: d.date.slice(5), value: Math.round(d.totals.protein) }));

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
          Calories &amp; protein vs. the cut plan, pulled from the journal. Targets live in{' '}
          <code className="text-cyan-400">data/profile.yml</code>.
        </p>

        {days.length === 0 ? (
          <div className="arcade-card p-8 text-center text-gray-400">
            No calorie data yet. Log a day and run <code className="text-cyan-400">npm run extract:widgets</code>.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <Tile label="Days logged" value={String(days.length)} />
              <Tile label="Avg calories" value={avgCalories != null ? String(avgCalories) : '—'} sub="per logged day" />
              <Tile
                label="Avg protein"
                value={avgProtein != null ? `${avgProtein} g` : '—'}
                sub={`aim ${proteinAim} g/day`}
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

            <section className="arcade-card p-5">
              <h2 className="text-lg font-bold mb-4 text-cyan-400">Day by day</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-gray-500 border-b border-slate-700">
                    <tr>
                      <th className="py-2 pr-4">Date</th>
                      <th className="py-2 pr-4">Type</th>
                      <th className="py-2 pr-4 text-right">Calories</th>
                      <th className="py-2 pr-4 text-right">Target</th>
                      <th className="py-2 pr-4 text-right">Δ</th>
                      <th className="py-2 pr-4 text-right">Protein</th>
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
                          <td className="py-2 pr-4 text-right">{d.totals.calories}</td>
                          <td className="py-2 pr-4 text-right text-gray-500">{d.target ?? '—'}</td>
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
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        <p className="text-gray-600 text-xs mt-8">
          Fitness math, not dietitian advice. See also <Link href="/workouts" className="text-cyan-400">Workouts</Link>.
        </p>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');
  const yaml = require('js-yaml');

  let calorie: any[] = [];
  try {
    calorie = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/widgets/calorie.json'), 'utf8'));
  } catch {
    calorie = [];
  }

  let profile: any = {};
  try {
    profile = yaml.load(fs.readFileSync(path.join(process.cwd(), 'data/profile.yml'), 'utf8')) || {};
  } catch {
    profile = {};
  }

  const beau = profile?.people?.beau ?? {};
  const calorieTargets = beau.calorie_targets ?? {};
  const proteinAim = beau?.protein?.aim_g ?? 145;

  const days = calorie.map((d: any) => {
    const target = d.dayType && calorieTargets[d.dayType] != null ? calorieTargets[d.dayType] : null;
    const delta = target != null ? d.totals.calories - target : null;
    return { ...d, target, delta };
  });

  const avgCalories = days.length
    ? Math.round(days.reduce((a: number, d: any) => a + d.totals.calories, 0) / days.length)
    : null;
  const avgProtein = days.length
    ? Math.round(days.reduce((a: number, d: any) => a + d.totals.protein, 0) / days.length)
    : null;

  return { props: { days, proteinAim, avgCalories, avgProtein } };
}
