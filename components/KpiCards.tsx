import { KPIS } from "@/lib/data";

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const pts = data
    .map((v, i) => `${(i * 60) / (data.length - 1)},${28 - ((v - min) / (max - min || 1)) * 26}`)
    .join(" ");
  return (
    <svg width="64" height="30" aria-hidden="true">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

export default function KpiCards() {
  return (
    <div className="kpis">
      {KPIS.map((k) => (
        <div key={k.label} className="card">
          <div className="kpi-top">
            <div className="ic" style={{ background: k.bg }}>{k.icon}</div>
            {k.label}
          </div>
          <div className="kpi-value">{k.value}</div>
          <div className="kpi-foot">
            <span><span className="up">↑ {k.change}</span> vs. last 7 days</span>
            <Sparkline data={k.spark} color={k.color} />
          </div>
        </div>
      ))}
    </div>
  );
}
