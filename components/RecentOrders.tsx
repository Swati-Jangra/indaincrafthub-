import { ORDERS } from "@/lib/data";

export default function RecentOrders() {
  return (
    <div className="card">
      <div className="hd">
        <h3>Recent Orders</h3>
        <a href="#">View All</a>
      </div>
      <div className="ov">
        <table>
          <thead>
            <tr><th>Order ID</th><th>Customer</th><th>Amount</th><th>Status</th><th>Date</th></tr>
          </thead>
          <tbody>
            {ORDERS.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.customer}</td>
                <td>{o.amount}</td>
                <td><span className={`pill ${o.status}`}>{o.status}</span></td>
                <td className="muted">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
