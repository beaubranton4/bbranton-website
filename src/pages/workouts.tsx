import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import MiniChart from '../components/MiniChart';

interface SetEntry {
  weight: number;
  reps: number;
  failure: boolean;
}
interface Dial {
  action: 'up' | 'hold' | 'drop';
  text: string;
}
interface LiftView {
  exercise: string;
  equipment: string;
  topSet: SetEntry | null;
  est1RM: number | null;
  volume: number;
  dial: Dial;
  trend: { label: string; value: number }[];
}
interface LifterView {
  name: string;
  latestDate: string;
  latestSourceId: string;
  sessionVolume: number;
  sessions: number;
  lifts: LiftView[];
}
interface Props {
  lifters: LifterView[];
}

const DIAL_STYLE: Record<Dial['action'], string> = {
  up: 'text-cyan-400 border-cyan-500/40',
  hold: 'text-amber-400 border-amber-500/40',
  drop: 'text-pink-400 border-pink-500/40',
};
const DIAL_ICON: Record<Dial['action'], string> = { up: '▲', hold: '■', drop: '▼' };

export default function Workouts({ lifters }: Props) {
  const [active, setActive] = useState(0);

  if (lifters.length === 0) {
    return (
      <>
        <Head>
          <title>Workouts | Beau Branton</title>
        </Head>
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-cyan-400 mb-6"
            style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '16px' }}
          >
            WORKOUTS
          </h1>
          <div className="arcade-card p-8 text-center text-gray-400">
            No workouts logged yet. Log a session and run <code className="text-cyan-400">npm run extract:widgets</code>.
          </div>
        </div>
      </>
    );
  }

  const lifter = lifters[active];

  return (
    <>
      <Head>
        <title>Workouts | Beau Branton</title>
        <meta name="description" content="Strength training log — top sets, est. 1RM, and next-session dials." />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1
          className="text-cyan-400 mb-2"
          style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '16px', lineHeight: '1.8' }}
        >
          WORKOUTS
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Top sets, est. 1RM (Epley), volume, and an auto next-session dial. Pulled from the journal.
        </p>

        {/* lifter toggle */}
        <div className="flex gap-2 mb-6">
          {lifters.map((l, i) => (
            <button
              key={l.name}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-sm border transition-all ${
                i === active
                  ? 'bg-slate-800 text-cyan-400 border-cyan-500/60'
                  : 'bg-slate-900/60 text-gray-400 border-slate-700 hover:text-white'
              }`}
            >
              {l.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <div className="arcade-card p-4">
            <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Latest session</div>
            <div className="text-cyan-400 text-lg font-bold">
              <Link href={`/blog/${lifter.latestSourceId}`} className="hover:text-pink-400">
                {lifter.latestDate}
              </Link>
            </div>
          </div>
          <div className="arcade-card p-4">
            <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Session volume</div>
            <div className="text-cyan-400 text-2xl font-bold">{lifter.sessionVolume.toLocaleString()}<span className="text-sm text-gray-500"> lb</span></div>
          </div>
          <div className="arcade-card p-4">
            <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Sessions logged</div>
            <div className="text-cyan-400 text-2xl font-bold">{lifter.sessions}</div>
          </div>
        </div>

        <div className="space-y-4">
          {lifter.lifts.map((lift) => (
            <section key={lift.exercise} className="arcade-card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h2 className="text-lg font-bold text-cyan-400">
                  {lift.exercise}
                  <span className="text-gray-600 text-xs font-normal ml-2">{lift.equipment}</span>
                </h2>
                <span className={`arcade-chip ${DIAL_STYLE[lift.dial.action]}`}>
                  {DIAL_ICON[lift.dial.action]} {lift.dial.text}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                <div>
                  <div className="text-gray-500 text-xs">Top set</div>
                  <div className="text-gray-200">
                    {lift.topSet ? `${lift.topSet.weight} × ${lift.topSet.reps}${lift.topSet.failure ? ' F' : ''}` : '—'}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Est. 1RM</div>
                  <div className="text-gray-200">{lift.est1RM ?? '—'}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Volume</div>
                  <div className="text-gray-200">{lift.volume.toLocaleString()} lb</div>
                </div>
              </div>

              {lift.trend.length > 1 && (
                <div className="mt-2">
                  <div className="text-gray-500 text-xs mb-1">Est. 1RM trend</div>
                  <MiniChart data={lift.trend} unit="" color="#22d3ee" height={120} />
                </div>
              )}
            </section>
          ))}
        </div>

        <p className="text-gray-600 text-xs mt-8">
          Dumbbell weight is per dumbbell; volume = Σ(weight × reps). See also{' '}
          <Link href="/health" className="text-cyan-400">Health</Link>.
        </p>
      </div>
    </>
  );
}

function nextDial(sets: SetEntry[], topSet: SetEntry | null): Dial {
  const n = sets.length;
  const last = sets[n - 1];
  const prev = sets[n - 2];
  const twoInARow = last?.failure && prev?.failure && last.weight === prev.weight;
  if (twoInARow) {
    return { action: 'drop', text: `Drop ~10% and rebuild` };
  }
  if (last?.failure || topSet?.failure) {
    return { action: 'hold', text: topSet ? `Hold ${topSet.weight}, re-test` : 'Hold, re-test' };
  }
  if (topSet) {
    return { action: 'up', text: `+5 lb (${topSet.weight} → ${topSet.weight + 5})` };
  }
  return { action: 'hold', text: 'Hold' };
}

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');

  let sessions: any[] = [];
  try {
    sessions = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/widgets/workout.json'), 'utf8'));
  } catch {
    sessions = [];
  }

  // collect the set of lifter names, preserving first-seen order
  const names: string[] = [];
  for (const s of sessions) {
    for (const l of s.lifters ?? []) {
      if (!names.includes(l.name)) names.push(l.name);
    }
  }

  const lifters = names.map((name) => {
    // sessions that include this lifter, oldest → newest
    const theirs = sessions
      .filter((s) => (s.lifters ?? []).some((l: any) => l.name === name))
      .sort((a, b) => a.date.localeCompare(b.date));
    const latest = theirs[theirs.length - 1];
    const latestLifter = (latest.lifters ?? []).find((l: any) => l.name === name);

    // est1RM trend per exercise across their sessions
    const trendByExercise: Record<string, { label: string; value: number }[]> = {};
    for (const s of theirs) {
      const lf = (s.lifters ?? []).find((l: any) => l.name === name);
      for (const lift of lf?.lifts ?? []) {
        if (lift.est1RM == null) continue;
        (trendByExercise[lift.exercise] ??= []).push({ label: s.date.slice(5), value: lift.est1RM });
      }
    }

    const lifts: LiftView[] = (latestLifter.lifts ?? []).map((lift: any) => ({
      exercise: lift.exercise,
      equipment: lift.equipment,
      topSet: lift.topSet,
      est1RM: lift.est1RM,
      volume: lift.volume,
      dial: nextDial(lift.sets ?? [], lift.topSet),
      trend: trendByExercise[lift.exercise] ?? [],
    }));

    return {
      name,
      latestDate: latest.date,
      latestSourceId: latest.sourceId,
      sessionVolume: latestLifter.sessionVolume,
      sessions: theirs.length,
      lifts,
    };
  });

  return { props: { lifters } };
}
