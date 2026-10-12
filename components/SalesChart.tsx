"use client";

import { useState } from "react";
import { SALES_RANGES } from "@/lib/data";

const W = 560, H = 250, L = 36, B = 26;

export default function SalesChart() {
  const [range, setRange] = useState("Last 7 Days");
  const { labels, revenue, orders } = SALES_RANGES[range];

  const max = Math.max(...revenue) * 1.2;
  const X = (i: number) => L + (i * (W - L - 10)) / (labels.length - 1);
  const Y = (v: number) => H - B - (v / max) * (H - B - 10);
  const pts = (s: number[]) => s.map((v, i) => `${X(i)},${Y(v)}`).join(" ");

  return (
    <div className="card chart">
      <div className="hd">
        <h3>Sales Overview</h3>
        <select value={range} onChange={(e) => setRange(e.target.value)}>
          {Object.keys(SALES_RANGES).map((r) => <option key={r}>{r}</option>)}
        </select>
      </div>
      <div className="legend">
        <span><i style={{ background: "var(--pri)" }} />Revenue</span>
        <span><i style={{ background: "#9db4f7" }} />Orders</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Sales overview chart">
        {[0, 1, 2, 3, 4].map((i) => {
          const v = (max * i) / 4;
          return (
            <g key={i}>
              <line x1={L} x2={W} y1={Y(v)} y2={Y(v)} stroke="var(--bd)" />
              <text x={0} y={Y(v) + 3}>{Math.round(v)}K</text>
            </g>
          );
        })}
        <polygon points={`${L},${H - B} ${pts(revenue)} ${X(revenue.length - 1)},${H - B}`} fill="var(--pri)" opacity=".1" />
        <polyline points={pts(revenue)} fill="none" stroke="var(--pri)" strokeWidth="2" />
        <polyline points={pts(orders)} fill="none" stroke="#9db4f7" strokeWidth="2" />
        {revenue.map((v, i) => (
          <circle key={i} cx={X(i)} cy={Y(v)} r="3.5" fill="var(--pri)">
            <title>{`${labels[i]}: ₹${v}K`}</title>
          </circle>
        ))}
        {labels.map((t, i) => (
          <text key={t} x={X(i) - 12} y={H - 8}>{t}</text>
        ))}
      </svg>
    </div>
  );
}
