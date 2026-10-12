import AdminShell from "@/components/AdminShell";
import KpiCards from "@/components/KpiCards";
import SalesChart from "@/components/SalesChart";
import ActionRequired from "@/components/ActionRequired";
import RecentOrders from "@/components/RecentOrders";
import TopProducts from "@/components/TopProducts";
import OrderTimeline from "@/components/OrderTimeline";
import { QuickActions, LowStockAlert, SalesByCategory, PromoCard } from "@/components/SidePanel";

export default function DashboardPage() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "short", day: "numeric", month: "short", year: "numeric",
  });

  return (
    <AdminShell>
      <div className="wrap">
        <div className="col">
          <div className="greet">
            <div>
              <h1>Good Morning, Swati! 👋</h1>
              <p>Here&apos;s what&apos;s happening with your store today.</p>
            </div>
            <span className="date" suppressHydrationWarning>{today}</span>
          </div>

          <KpiCards />

          <div className="mid">
            <SalesChart />
            <ActionRequired />
          </div>

          <div className="two">
            <RecentOrders />
            <TopProducts />
          </div>

          <OrderTimeline />
        </div>

        <div className="col side">
          <QuickActions />
          <LowStockAlert />
          <SalesByCategory />
          <PromoCard />
        </div>
      </div>
    </AdminShell>
  );
}
