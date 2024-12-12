const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <span className="text-2xl">✈️</span>
            <span className="ml-2 text-xl font-semibold">Travel Planner</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <input
                type="search"
                placeholder="Search destinations..."
                className="w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-sm 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <span className="text-2xl">👤</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
