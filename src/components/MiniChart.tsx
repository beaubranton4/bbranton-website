// MiniChart — a tiny zero-dependency responsive SVG line chart with an optional
// target line. Used by /health and /workouts. Kept deliberately simple; swap for
// recharts later if the dashboards grow. Theme: cyan line, pink target, on dark.

interface Point {
  label: string;
  value: number;
}

interface MiniChartProps {
  data: Point[];
  target?: number;
  targetLabel?: string;
  color?: string; // stroke for the series line
  unit?: string;
  height?: number;
}

export default function MiniChart({
  data,
  target,
  targetLabel,
  color = '#22d3ee', // cyan-400
  unit = '',
  height = 160,
}: MiniChartProps) {
  const width = 640;
  const padX = 44;
  const padTop = 16;
  const padBottom = 28;
  const plotW = width - padX * 2;
  const plotH = height - padTop - padBottom;

  if (data.length === 0) {
    return <p className="text-gray-500 text-sm">No data yet.</p>;
  }

  const values = data.map((d) => d.value);
  const candidates = target != null ? [...values, target] : values;
  const rawMax = Math.max(...candidates);
  const rawMin = Math.min(...candidates, 0);
  // pad the range a touch so the line/target aren't glued to the edges
  const span = rawMax - rawMin || 1;
  const yMax = rawMax + span * 0.1;
  const yMin = rawMin;

  const x = (i: number) =>
    data.length === 1 ? padX + plotW / 2 : padX + (i / (data.length - 1)) * plotW;
  const y = (v: number) => padTop + plotH - ((v - yMin) / (yMax - yMin)) * plotH;

  const linePath = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)} ${y(d.value).toFixed(1)}`)
    .join(' ');

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        style={{ minWidth: 320 }}
        role="img"
        aria-label="chart"
      >
        {/* target line */}
        {target != null && (
          <>
            <line
              x1={padX}
              x2={width - padX}
              y1={y(target)}
              y2={y(target)}
              stroke="#ec4899"
              strokeDasharray="4 4"
              strokeWidth={1}
              opacity={0.8}
            />
            <text x={width - padX} y={y(target) - 4} textAnchor="end" fontSize={10} fill="#f472b6">
              {targetLabel ?? `target ${target}${unit}`}
            </text>
          </>
        )}

        {/* series line */}
        <path d={linePath} fill="none" stroke={color} strokeWidth={2} />

        {/* points + value labels */}
        {data.map((d, i) => (
          <g key={i}>
            <circle cx={x(i)} cy={y(d.value)} r={3} fill={color} />
            <text x={x(i)} y={y(d.value) - 8} textAnchor="middle" fontSize={10} fill="#e5e7eb">
              {d.value}
              {unit}
            </text>
            <text x={x(i)} y={height - 8} textAnchor="middle" fontSize={10} fill="#9ca3af">
              {d.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
