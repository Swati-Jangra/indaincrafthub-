// Sample data — replace with API calls (e.g. fetch from your backend) later.

export type NavItem =
  | string
  | { label: string; count: number; color: string };

export type NavGroup = {
  icon: string;
  label: string;
  items?: NavItem[];
  isNew?: boolean;
  defaultOpen?: boolean;
};

export const NAV: NavGroup[] = [
  { icon: "🏠", label: "Dashboard" },
  { icon: "📦", label: "Catalog", items: ["Products", "Categories", "Brands", "Attributes", "Reviews"] },
  {
    icon: "🧾", label: "Orders", defaultOpen: true,
    items: [
      { label: "All Orders", count: 12, color: "#3b82f6" },
      { label: "Pending", count: 5, color: "#64748b" },
      { label: "Processing", count: 8, color: "#b45309" },
      { label: "Shipped", count: 14, color: "#3b82f6" },
      { label: "Delivered", count: 32, color: "#3b82f6" },
      { label: "Cancelled", count: 3, color: "#64748b" },
      { label: "Returns & Refunds", count: 4, color: "#ef4444" },
    ],
  },
  {
    icon: "🏬", label: "Inventory",
    items: [
      "Stock Overview",
      { label: "Low Stock", count: 12, color: "#3b82f6" },
      { label: "Out of Stock", count: 7, color: "#ef4444" },
      "Stock Adjustment",
      "Stock History",
    ],
  },
  { icon: "👥", label: "Customers", items: ["All Customers", "Customer Segments", "Customer Activity"] },
  { icon: "📣", label: "Marketing", isNew: true, items: ["Coupons & Offers", "Banners", "Email Campaigns", "Abandoned Carts"] },
  { icon: "💳", label: "Payments", items: ["Transactions", "Failed Payments", "Payouts"] },
  { icon: "🚚", label: "Shipping", items: ["Shipments", "Couriers", "Shipping Zones"] },
  { icon: "📈", label: "Reports", isNew: true, items: ["Sales Report", "Product Report", "Customer Report"] },
  { icon: "⚙️", label: "Settings", isNew: true, items: ["Store Settings", "Staff & Roles", "Taxes", "Notifications"] },
];

export const KPIS = [
  { icon: "💰", label: "Total Revenue", value: "₹2,45,800", change: "18.4%", color: "#16a34a", bg: "var(--okb)", spark: [3, 4, 3, 5, 6, 6, 8] },
  { icon: "🛍️", label: "Total Orders", value: "1,284", change: "12.2%", color: "#2563eb", bg: "var(--inb)", spark: [2, 3, 3, 4, 4, 6, 7] },
  { icon: "👤", label: "Total Customers", value: "8,492", change: "8.7%", color: "#7c3aed", bg: "var(--pub)", spark: [5, 4, 5, 6, 5, 7, 7] },
  { icon: "🏷️", label: "Avg. Order Value", value: "₹1,912", change: "5.4%", color: "#f59e0b", bg: "var(--wab)", spark: [3, 3, 4, 3, 5, 4, 6] },
];

export const SALES_RANGES: Record<string, { labels: string[]; revenue: number[]; orders: number[] }> = {
  "Last 7 Days": {
    labels: ["18 Sep", "19 Sep", "20 Sep", "21 Sep", "22 Sep", "23 Sep", "24 Sep", "25 Sep"],
    revenue: [15, 24, 18, 27, 35, 42, 32, 38],
    orders: [6, 10, 8, 13, 15, 20, 15, 20],
  },
  "Last 30 Days": {
    labels: ["W1", "W2", "W3", "W4", "W5"],
    revenue: [110, 150, 130, 190, 240],
    orders: [50, 70, 60, 95, 120],
  },
};

export const ACTIONS = [
  { count: 12, label: "Products Low Stock", color: "#f59e0b", icon: "⚑" },
  { count: 5, label: "Orders Pending Shipment", color: "#2563eb", icon: "◉" },
  { count: 3, label: "Payments Failed", color: "#dc2626", icon: "✕" },
  { count: 4, label: "Return Requests", color: "#7c3aed", icon: "↺" },
  { count: 2, label: "Products Out of Stock", color: "#dc2626", icon: "⦸" },
];

export const ORDERS = [
  { id: "#ORD-10245", customer: "Priya Sharma", amount: "₹2,499", status: "Paid", date: "25 Sep, 11:24 AM" },
  { id: "#ORD-10244", customer: "Amit Verma", amount: "₹1,899", status: "Shipped", date: "25 Sep, 10:32 AM" },
  { id: "#ORD-10243", customer: "Neha Kapoor", amount: "₹4,200", status: "Pending", date: "25 Sep, 09:18 AM" },
  { id: "#ORD-10242", customer: "Rohit Singh", amount: "₹999", status: "Delivered", date: "24 Sep, 07:45 PM" },
  { id: "#ORD-10241", customer: "Sneha Patel", amount: "₹3,499", status: "Processing", date: "24 Sep, 06:12 PM" },
];

export const TOP_PRODUCTS = [
  { icon: "🎧", name: "Wireless Earbuds", sold: 482, revenue: "₹6,74,800" },
  { icon: "⌚", name: "Smart Watch", sold: 410, revenue: "₹6,15,200" },
  { icon: "🎒", name: "Backpack", sold: 356, revenue: "₹5,34,000" },
  { icon: "👕", name: "T-Shirt", sold: 298, revenue: "₹2,98,000" },
  { icon: "👟", name: "Running Shoes", sold: 245, revenue: "₹3,92,000" },
];

export const LOW_STOCK = [
  { icon: "📱", name: "iPhone Case", stock: 3, level: "Critical" },
  { icon: "🖱️", name: "Wireless Mouse", stock: 7, level: "Low" },
  { icon: "⌨️", name: "Keyboard", stock: 9, level: "Low" },
  { icon: "🔊", name: "Bluetooth Speaker", stock: 12, level: "Low" },
  { icon: "⌚", name: "Smart Watch", stock: 15, level: "Normal" },
];

export const CATEGORIES = [
  { name: "Electronics", pct: 32, color: "#2f5bea" },
  { name: "Fashion", pct: 24, color: "#8b5cf6" },
  { name: "Home & Living", pct: 18, color: "#22c55e" },
  { name: "Beauty", pct: 12, color: "#f59e0b" },
  { name: "Sports", pct: 8, color: "#ef4444" },
  { name: "Others", pct: 6, color: "#94a3b8" },
];

export const TIMELINE_STEPS = [
  { label: "Order Placed", time: "10:20 AM" },
  { label: "Payment Received", time: "10:21 AM" },
  { label: "Processing", time: "11:10 AM" },
  { label: "Shipped", time: "02:45 PM" },
  { label: "Out for Delivery", time: "Pending" },
  { label: "Delivered", time: "Pending" },
];

export const QUICK_ACTIONS = [
  { icon: "➕", label: "Add Product" },
  { icon: "🛒", label: "Create Order" },
  { icon: "🏷️", label: "Add Coupon" },
  { icon: "📊", label: "View Reports" },
];
