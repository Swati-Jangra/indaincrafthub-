"use client";

import { useState } from "react";
import { TIMELINE_STEPS } from "@/lib/data";

// Current step index per order (demo data)
const ORDER_PROGRESS: Record<string, number> = {
  "#ORD-10245": 3,
  "#ORD-10244": 2,
};

export default function OrderTimeline() {
  const [orderId, setOrderId] = useState("#ORD-10245");
  const current = ORDER_PROGRESS[orderId];

  return (
    <div className="card">
      <div className="hd">
        <h3>Order Processing Timeline</h3>
        <select value={orderId} onChange={(e) => setOrderId(e.target.value)}>
          {Object.keys(ORDER_PROGRESS).map((id) => <option key={id}>{id}</option>)}
        </select>
      </div>
      <div className="timeline">
        {TIMELINE_STEPS.map((s, i) => (
          <div key={s.label} className={`step ${i < current ? "done" : i === current ? "cur" : ""}`}>
            <div className="dot">{i < current ? "✓" : i + 1}</div>
            {s.label}
            <small>{i <= current ? s.time : "Pending"}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
