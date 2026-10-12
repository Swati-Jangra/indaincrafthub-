"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
  };

  return (
    <div className="shell">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className={`backdrop ${open ? "show" : ""}`} onClick={() => setOpen(false)} />
      <div className="main">
        <Header onMenu={() => setOpen((o) => !o)} onTheme={toggleTheme} />
        {children}
      </div>
    </div>
  );
}
