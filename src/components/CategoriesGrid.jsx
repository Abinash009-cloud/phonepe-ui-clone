const categories = [
  { name: "Mobile", icon: "📱" },
  { name: "Electricity", icon: "💡" },
  { name: "DTH", icon: "📺" },
  { name: "Gas", icon: "🔥" },
  { name: "Broadband", icon: "🌐" },
  { name: "Loan", icon: "📄" },
];

export default function CategoriesGrid() {
  return (
    <div className="categories-grid">
      <h3 className="ch3">
        Recharge & Pay Bills
      </h3>
      <div className="grid">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category"
          >
            <div className="ticon">{cat.icon}</div>
            <p className="cp">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
