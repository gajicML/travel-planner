const Navigation = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-2xl">✈️</span>
        <h1 className="text-xl font-semibold">Travel Planner</h1>
      </div>

      <div className="flex-1 max-w-md px-4">
        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full px-4 py-2 rounded-full border focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="text-2xl cursor-pointer">👤</div>
    </nav>
  );
};

export default Navigation;
