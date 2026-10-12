"use client";

import { useState } from "react";
import { NAV } from "@/lib/data";

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(NAV.filter((n) => n.defaultOpen).map((n) => [n.label, true]))
  );

  const toggle = (label: string) =>
    setOpenGroups((s) => ({ ...s, [label]: !s[label] }));

  return (
    <aside className={`sidebar ${open ? "show" : ""}`}>
      <div className="logo">
        <div className="logo-mark">🛍️</div>
        <div className="logo-name">
          iCH<small>E-Commerce Admin</small>
        </div>
      </div>

      <nav>
        {NAV.map((g) =>
          !g.items ? (
            <button key={g.label} className="nav-btn active" onClick={onClose}>
              {g.icon} {g.label}
            </button>
          ) : (
            <div key={g.label} className={`group ${openGroups[g.label] ? "open" : ""}`}>
              <button className="nav-btn" onClick={() => toggle(g.label)}>
                {g.icon} {g.label}
                {g.isNew && <span className="new-tag">NEW</span>}
                <span className="chev">▲</span>
              </button>
              <div className="sub">
                {g.items.map((it) =>
                  typeof it === "string" ? (
                    <a key={it} href="#">{it}</a>
                  ) : (
                    <a key={it.label} href="#">
                      {it.label}
                      <span className="badge" style={{ background: it.color }}>{it.count}</span>
                    </a>
                  )
                )}
              </div>
            </div>
          )
        )}
      </nav>
    </aside>
  );
}
