import { TOP_PRODUCTS } from "@/lib/data";

export default function TopProducts() {
  return (
    <div className="card">
      <div className="hd">
        <h3>Top Selling Products</h3>
        <a href="#">View All</a>
      </div>
      <div className="ov">
        <table>
          <thead>
            <tr><th>#</th><th>Product</th><th>Sold</th><th>Revenue</th></tr>
          </thead>
          <tbody>
            {TOP_PRODUCTS.map((p, i) => (
              <tr key={p.name}>
                <td>{i + 1}</td>
                <td><span className="thumb">{p.icon}</span>{p.name}</td>
                <td>{p.sold}</td>
                <td>{p.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
