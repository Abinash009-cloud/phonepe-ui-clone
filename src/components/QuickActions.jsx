const actions = [
  { label: "To Contact", icon: "📱" },
  { label: "To Bank", icon: "🏦" },
  { label: "UPI ID", icon: "🔗" },
];

export default function QuickActions() {
  return (
    <div className="quick-actions">
      <h3 className="wh3">Money Transfer</h3>
      <div className="action-buttons">
        {actions.map((a) => (
          <div
            key={a.label}
            className="action"
          >
            <div className="icon">{a.icon}</div>
            <p className="ap">{a.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
