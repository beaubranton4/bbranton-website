import Head from 'next/head';
import Link from 'next/link';
import MiniChart from '../components/MiniChart';

interface TimeEntry {
  project: string;
  category: string | null;
  hours: number;
  note: string | null;
  deep: boolean;
}
interface TimeDay {
  date: string;
  person: string;
  entries: TimeEntry[];
  totalHours: number;
  byProject: Record<string, number>;
  byCategory: Record<string, number>;
  deepHours: number;
  note: string | null;
  sourceId: string;
  deDeep: number; // computed in getStaticProps: deep hours on dugout-edge only
}
interface StackedDay {
  date: string;
  total: number;
  segments: { project: string; hours: number }[];
}
interface Props {
  days: TimeDay[];
  window: {
    deHours: number;
    deDeep: number;
    delta: number | null;
    totalHours: number;
    exploreHours: number;
    daysLogged: number;
    byProject: Record<string, number>;
  };
  stacked: StackedDay[];
  deepTrend: { label: string; value: number }[];
  deCategories: { category: string; hours: number }[];
}

// Fixed order + fixed colors — color follows the entity, never its rank.
// Validated (dataviz six checks) against the site surface #0f172a:
// worst adjacent CVD ΔE 10.3, normal-vision 20.3, all ≥3:1 contrast.
// dugout-edge sits at the bottom of the stack: the subject reads off the baseline.
const PROJECT_META: { key: string; label: string; color: string }[] = [
  { key: 'dugout-edge', label: 'Dugout Edge', color: '#0891b2' },
  { key: 'job', label: 'Job', color: '#7c3aed' },
  { key: 'exploration', label: 'Exploration', color: '#db2777' },
  { key: 'personal', label: 'Personal', color: '#d97706' },
];

function Tile({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="arcade-card p-4">
      <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">{label}</div>
      <div className="text-cyan-400 text-2xl font-bold">{value}</div>
      {sub && <div className="text-gray-500 text-xs mt-1">{sub}</div>}
    </div>
  );
}

// Rect with a 4px rounded data-end (top) and a square baseline edge.
function roundedTopPath(x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.min(r, h, w / 2);
  return `M ${x} ${y + h} L ${x} ${y + rr} Q ${x} ${y} ${x + rr} ${y} L ${x + w - rr} ${y} Q ${x + w} ${y} ${x + w} ${y + rr} L ${x + w} ${y + h} Z`;
}

function StackedBars({ data }: { data: StackedDay[] }) {
  const W = 640;
  const H = 200;
  const BASE = 170; // baseline y
  const TOP = 24; // headroom for total labels
  const maxTotal = Math.max(...data.map((d) => d.total), 1);
  const scale = (BASE - TOP) / (maxTotal * 1.1);
  const slot = (W - 40) / data.length;
  const barW = Math.min(24, slot * 0.6);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Hours per day by project">
      {/* baseline */}
      <line x1={16} y1={BASE} x2={W - 16} y2={BASE} stroke="#334155" strokeWidth={1} />
      {data.map((d, i) => {
        const x = 20 + slot * i + (slot - barW) / 2;
        let yCursor = BASE;
        const drawn = d.segments.filter((s) => s.hours > 0);
        return (
          <g key={d.date}>
            {drawn.map((s, si) => {
              const meta = PROJECT_META.find((m) => m.key === s.project);
              const h = s.hours * scale;
              const isBottom = si === 0;
              const isTop = si === drawn.length - 1;
              // 2px surface gap between touching segments (below each non-bottom segment)
              const gap = isBottom ? 0 : 2;
              const segH = Math.max(h - gap, 0.5);
              const segY = yCursor - h;
              yCursor -= h;
              const title = `${meta?.label ?? s.project}: ${s.hours} h — ${d.date}`;
              return isTop ? (
                <path key={s.project} d={roundedTopPath(x, segY, barW, segH, 4)} fill={meta?.color ?? '#64748b'}>
                  <title>{title}</title>
                </path>
              ) : (
                <rect key={s.project} x={x} y={segY} width={barW} height={segH} fill={meta?.color ?? '#64748b'}>
                  <title>{title}</title>
                </rect>
              );
            })}
            {/* total on the cap */}
            <text x={x + barW / 2} y={yCursor - 7} textAnchor="middle" fill="#9ca3af" fontSize={12}>
              {d.total}
            </text>
            {/* date label */}
            <text x={x + barW / 2} y={BASE + 18} textAnchor="middle" fill="#6b7280" fontSize={11}>
              {d.date.slice(5)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function Time({ days, window: win, stacked, deepTrend, deCategories }: Props) {
  const maxCat = Math.max(...deCategories.map((c) => c.hours), 1);

  return (
    <>
      <Head>
        <title>Time | Beau Branton</title>
        <meta name="description" content="Where the hours actually go — job, Dugout Edge, exploration, life." />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1
          className="text-cyan-400 mb-2"
          style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '16px', lineHeight: '1.8' }}
        >
          TIME
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Where the hours actually go, pulled from the journal. Narrated in natural language, logged per day —{' '}
          <span className="text-gray-400">deep</span> marks uninterrupted focused creation, the hours that actually
          ship things.
        </p>

        {days.length === 0 ? (
          <div className="arcade-card p-8 text-center text-gray-400">
            No time logged yet. Narrate a day to Claude and run{' '}
            <code className="text-cyan-400">npm run extract:widgets</code>.
          </div>
        ) : (
          <>
            {/* Hero: the number this page exists to answer */}
            <section className="arcade-card p-6 mb-6">
              <div className="text-gray-500 text-xs uppercase tracking-wide mb-2">Dugout Edge · last 7 days</div>
              <div className="text-5xl font-bold text-cyan-400">
                {win.deHours}
                <span className="text-2xl text-gray-500"> h</span>
              </div>
              <div className="text-sm text-gray-300 mt-2">
                {win.deDeep} h deep
                {win.delta != null && (
                  <span className={win.delta >= 0 ? 'text-cyan-400' : 'text-pink-400'}>
                    {' '}
                    · {win.delta >= 0 ? '+' : ''}
                    {win.delta} h vs prior 7 days
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-500 mt-3">
                {PROJECT_META.filter((m) => m.key !== 'dugout-edge').map((m, i) => (
                  <span key={m.key}>
                    {i > 0 && ' · '}
                    {m.label} {win.byProject[m.key] ?? 0} h
                  </span>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <Tile label="Tracked" value={`${win.totalHours} h`} sub="last 7 days" />
              <Tile label="DE deep" value={`${win.deDeep} h`} sub="focused creation" />
              <Tile
                label="Explore vs DE"
                value={`${win.exploreHours} / ${win.deHours} h`}
                sub="new ideas vs shipping"
              />
              <Tile label="Days logged" value={String(win.daysLogged)} sub="last 7 days" />
            </div>

            {stacked.length > 0 && (
              <section className="arcade-card p-5 mb-6">
                <h2 className="text-lg font-bold mb-1 text-cyan-400">Hours per day</h2>
                <p className="text-gray-500 text-xs mb-3">Stacked by project, last 7 days. Untracked time isn&apos;t shown.</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
                  {PROJECT_META.map((m) => (
                    <span key={m.key} className="flex items-center gap-1.5 text-xs text-gray-400">
                      <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: m.color }} />
                      {m.label}
                    </span>
                  ))}
                </div>
                <StackedBars data={stacked} />
              </section>
            )}

            {deepTrend.length > 1 && (
              <section className="arcade-card p-5 mb-6">
                <h2 className="text-lg font-bold mb-1 text-cyan-400">Dugout Edge deep hours</h2>
                <p className="text-gray-500 text-xs mb-4">
                  The shipping trend. Flat or falling while total hours rise means the work is turning into overhead.
                </p>
                <MiniChart data={deepTrend} unit=" h" height={120} />
              </section>
            )}

            {deCategories.length > 0 && (
              <section className="arcade-card p-5 mb-8">
                <h2 className="text-lg font-bold mb-1 text-cyan-400">Where Dugout Edge time goes</h2>
                <p className="text-gray-500 text-xs mb-4">By category, last 7 days.</p>
                <div className="space-y-2">
                  {deCategories.map((c) => (
                    <div key={c.category} className="flex items-center gap-3">
                      <div className="w-24 text-xs text-gray-400 capitalize shrink-0">{c.category}</div>
                      <div className="flex-1 h-2.5 bg-slate-700/40 rounded-sm overflow-hidden">
                        <div
                          className="h-full rounded-sm"
                          style={{ width: `${(c.hours / maxCat) * 100}%`, backgroundColor: '#0891b2' }}
                        />
                      </div>
                      <div className="w-12 text-right text-xs text-gray-300">{c.hours} h</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="arcade-card p-5">
              <h2 className="text-lg font-bold mb-4 text-cyan-400">Day by day</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-gray-500 border-b border-slate-700">
                    <tr>
                      <th className="py-2 pr-4">Date</th>
                      <th className="py-2 pr-4 text-right">Total</th>
                      <th className="py-2 pr-4 text-right">Job</th>
                      <th className="py-2 pr-4 text-right">DE</th>
                      <th className="py-2 pr-4 text-right">DE deep</th>
                      <th className="py-2 pr-4 text-right">Explore</th>
                      <th className="py-2 pr-4 text-right">Personal</th>
                      <th className="py-2 pr-4">Note</th>
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
                          <td className="py-2 pr-4 text-right">{d.totalHours} h</td>
                          <td className="py-2 pr-4 text-right text-gray-400">{d.byProject['job'] ?? '—'}</td>
                          <td className="py-2 pr-4 text-right">{d.byProject['dugout-edge'] ?? '—'}</td>
                          <td className="py-2 pr-4 text-right">
                            {d.deDeep > 0 ? <span className="text-cyan-400">{d.deDeep}</span> : '—'}
                          </td>
                          <td
                            className={`py-2 pr-4 text-right ${
                              (d.byProject['exploration'] ?? 0) > (d.byProject['dugout-edge'] ?? 0) &&
                              (d.byProject['exploration'] ?? 0) > 0
                                ? 'text-pink-400'
                                : 'text-gray-400'
                            }`}
                          >
                            {d.byProject['exploration'] ?? '—'}
                          </td>
                          <td className="py-2 pr-4 text-right text-gray-400">{d.byProject['personal'] ?? '—'}</td>
                          <td className="py-2 pr-4 text-gray-500 text-xs max-w-[16rem] truncate" title={d.note ?? ''}>
                            {d.note ?? '—'}
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
          You can&apos;t improve what you don&apos;t measure. See also{' '}
          <Link href="/health" className="text-cyan-400">
            Health
          </Link>{' '}
          and{' '}
          <Link href="/workouts" className="text-cyan-400">
            Workouts
          </Link>
          .
        </p>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');

  const readJson = (rel: string) => {
    try {
      return JSON.parse(fs.readFileSync(path.join(process.cwd(), rel), 'utf8'));
    } catch {
      return [];
    }
  };

  const raw: any[] = readJson('data/widgets/time.json');
  const round1 = (n: number) => Math.round(n * 10) / 10;

  // Deep hours on dugout-edge specifically (deepHours in the JSON spans all projects).
  const deDeepOf = (d: any) =>
    round1(
      (d.entries ?? [])
        .filter((e: any) => e.project === 'dugout-edge' && e.deep)
        .reduce((a: number, e: any) => a + e.hours, 0)
    );

  const days = raw.map((d: any) => ({ ...d, deDeep: deDeepOf(d) }));

  const addDays = (dateStr: string, n: number) => {
    const dt = new Date(`${dateStr}T00:00:00Z`);
    dt.setUTCDate(dt.getUTCDate() + n);
    return dt.toISOString().slice(0, 10);
  };

  // Window = last 7 calendar days ending at the latest logged date; days with no
  // entry are simply absent. Prior window = the 7 days before that.
  const latest = days.length ? days[days.length - 1].date : null;
  const winStart = latest ? addDays(latest, -6) : null;
  const priorStart = latest ? addDays(latest, -13) : null;
  const winDays = latest ? days.filter((d: any) => d.date >= (winStart as string) && d.date <= latest) : [];
  const priorDays = latest
    ? days.filter((d: any) => d.date >= (priorStart as string) && d.date < (winStart as string))
    : [];

  const sumProject = (ds: any[], key: string) => round1(ds.reduce((a, d) => a + (d.byProject?.[key] ?? 0), 0));

  const byProject: Record<string, number> = {};
  for (const m of [
    { key: 'dugout-edge' },
    { key: 'job' },
    { key: 'exploration' },
    { key: 'personal' },
  ]) {
    byProject[m.key] = sumProject(winDays, m.key);
  }

  const deHours = byProject['dugout-edge'];
  const deDeep = round1(winDays.reduce((a: number, d: any) => a + d.deDeep, 0));
  const delta = priorDays.length > 0 ? round1(deHours - sumProject(priorDays, 'dugout-edge')) : null;

  const win = {
    deHours,
    deDeep,
    delta,
    totalHours: round1(winDays.reduce((a: number, d: any) => a + d.totalHours, 0)),
    exploreHours: byProject['exploration'],
    daysLogged: winDays.length,
    byProject,
  };

  // Stacked series: only projects with hours that day, in PROJECT_META order (bottom-up).
  const order = ['dugout-edge', 'job', 'exploration', 'personal'];
  const stacked = winDays.map((d: any) => ({
    date: d.date,
    total: d.totalHours,
    segments: order
      .map((key) => ({ project: key, hours: round1(d.byProject?.[key] ?? 0) }))
      .filter((s) => s.hours > 0),
  }));

  const deepTrend = days.map((d: any) => ({ label: d.date.slice(5), value: d.deDeep }));

  // DE hours by category across the window.
  const catTotals = new Map<string, number>();
  for (const d of winDays) {
    for (const e of d.entries ?? []) {
      if (e.project !== 'dugout-edge' || !e.category) continue;
      catTotals.set(e.category, (catTotals.get(e.category) ?? 0) + e.hours);
    }
  }
  const deCategories = Array.from(catTotals.entries())
    .map(([category, hours]) => ({ category, hours: round1(hours) }))
    .sort((a, b) => b.hours - a.hours);

  return { props: { days, window: win, stacked, deepTrend, deCategories } };
}
