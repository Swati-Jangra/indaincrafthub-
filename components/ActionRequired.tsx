import { ACTIONS } from "@/lib/data";

export default function ActionRequired() {
  return (
    <div className="card action-card">
      <div className="hd">
        <h3>⚠️ Action Required</h3>
        <a href="#">View All</a>
      </div>
      {ACTIONS.map((a) => (
        <div key={a.label} className="action-item">
          <div className="ic" style={{ background: `${a.color}22`, color: a.color }}>{a.icon}</div>
          <span className="num" style={{ color: a.color }}>{a.count}</span>
          <span className="label">{a.label}</span>
          <span>›</span>
        </div>
      ))}
    </div>
  );
}
