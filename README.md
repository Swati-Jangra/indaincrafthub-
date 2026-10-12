# iCH E-Commerce Admin (Next.js)

Admin dashboard built with Next.js (App Router) and TypeScript. No UI library needed.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

```
app/
  layout.tsx        Root layout + Inter font
  page.tsx          Dashboard page
  globals.css       All styles + light/dark theme tokens
components/
  AdminShell.tsx    Sidebar + header state (mobile menu, theme)
  Sidebar.tsx       Collapsible navigation
  Header.tsx        Search, theme toggle, notifications, user
  KpiCards.tsx      4 KPI cards with sparklines
  SalesChart.tsx    SVG line chart with range dropdown
  ActionRequired.tsx
  RecentOrders.tsx
  TopProducts.tsx
  OrderTimeline.tsx
  SidePanel.tsx     Quick Actions, Low Stock, Sales by Category, Promo
lib/
  data.ts           Sample data — replace with your API calls
```

## Connecting real data

Everything in `lib/data.ts` is sample data. Since the page is a Server Component,
you can fetch directly in `app/page.tsx` and pass props down:

```tsx
const res = await fetch(`${process.env.API_URL}/admin/dashboard`, { cache: "no-store" });
const data = await res.json();
```

Then give each component a `props` type instead of importing from `lib/data.ts`.
