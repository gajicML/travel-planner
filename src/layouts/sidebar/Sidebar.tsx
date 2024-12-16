import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 fixed h-full bg-white shadow-sm pt-16">
      {/* New Trip Button */}
      <div className="p-4">
        <Link
          to="/planner/new"
          className="block w-full bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          + New Trip
        </Link>
      </div>

      {/* Trip List */}
      <div className="p-4">
        <h2 className="text-gray-600 font-semibold mb-4">MY TRIPS</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/trips/paris"
              className={`block px-2 py-1.5 rounded ${
                location.pathname === '/trips/paris'
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              Paris Trip
            </Link>
          </li>
          <li>
            <Link
              to="/trips/tokyo"
              className={`block px-2 py-1.5 rounded ${
                location.pathname === '/trips/tokyo'
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              Tokyo Adventure
            </Link>
          </li>
        </ul>
      </div>

      {/* Filters remain same */}
    </aside>
  );
};

export default Sidebar;
