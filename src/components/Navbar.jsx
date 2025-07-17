export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="h1">PhonePe</h1>
      <div className="right">
        <input
          type="text"
          placeholder="Search"
          className="input"
        />
        <img
          src="https://i.pravatar.cc/32"
          alt="Profile"
          className="img"
        />
      </div>
    </header>
  );
}
