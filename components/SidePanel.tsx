import { CATEGORIES, LOW_STOCK, QUICK_ACTIONS } from "@/lib/data";

export function QuickActions() {
  return (
    <div className="card">
      <div className="hd"><h3>Quick Actions</h3></div>
      <div className="qa">
        {QUICK_ACTIONS.map((q) => (
          <button key={q.label}>{q.icon} {q.label}</button>
        ))}
      </div>
    </div>
  );
}

export function LowStockAlert() {
  return (
    <div className="card">
      <div className="hd">
        <h3>Low Stock Alert</h3>
        <a href="#">View All</a>
      </div>
      <div className="ov">
        <table>
          <thead>
            <tr><th>Product</th><th>Stock</th><th>Level</th></tr>
          </thead>
          <tbody>
            {LOW_STOCK.map((s) => (
              <tr key={s.name}>
                <td><span className="thumb">{s.icon}</span>{s.name}</td>
                <td style={{ color: s.stock < 10 ? "var(--er)" : "var(--wa)" }}>{s.stock}</td>
                <td><span className={`pill ${s.level}`}>{s.level}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function SalesByCategory() {
  let acc = 0;
  const gradient = CATEGORIES.map((c) => {
    const start = acc;
    acc += c.pct;
    return `${c.color} ${start}% ${acc}%`;
  }).join(", ");

  return (
    <div className="card">
      <div className="hd"><h3>Sales by Category</h3></div>
      <div className="donut">
        <div className="donut-ring" style={{ background: `conic-gradient(${gradient})` }}>
          <div>₹2.45L<small>Total Sales</small></div>
        </div>
        <div className="donut-legend">
          {CATEGORIES.map((c) => (
            <div key={c.name}>
              <i style={{ background: c.color }} />{c.name}<b>{c.pct}%</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PromoCard() {
  return (
    <div className="card promo">
      <div className="big">🏪</div>
      <div>
        <h4>Grow Your Store with Smart Insights</h4>
        <p>Check detailed reports, customer trends and product performance.</p>
        <button className="btn">View Analytics</button>
      </div>
    </div>
  );
}
