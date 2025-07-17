import { useState } from 'react';

const navItems = [
  { label: 'Home', icon: '🏠' },
  { label: 'Store', icon: '🛍️' },
  { label: 'History', icon: '📜' },
  { label: 'Profile', icon: '👤' },
];

export default function BottomNav() {
  const [active, setActive] = useState('Home');

  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <div
          key={item.label}
          className={`nav-item ${active === item.label ? 'active' : ''}`}
          onClick={() => setActive(item.label)}
        >
          <div className="icon">{item.icon}</div>
          <p className="label">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
