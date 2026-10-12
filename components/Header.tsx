"use client";

export default function Header({ onMenu, onTheme }: { onMenu: () => void; onTheme: () => void }) {
  return (
    <header className="header">
      <button className="menu-btn" aria-label="Open menu" onClick={onMenu}>☰</button>
      <input className="search" placeholder="Search products, orders, customers, SKU…" />
      <div className="spacer" />
      <button className="icon-btn" title="Toggle theme" onClick={onTheme}>🌓</button>
      <button className="icon-btn" aria-label="Notifications">🔔<i>3</i></button>
      <div className="user">
        <div className="avatar">SJ</div>
        <div className="user-text">
          Swati Jangra<small>Super Admin</small>
        </div>
      </div>
    </header>
  );
}
