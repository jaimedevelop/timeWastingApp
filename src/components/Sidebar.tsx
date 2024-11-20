import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart2 } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-gray-800 border-r border-gray-700">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-100 mb-6">Time Waster</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive('/')
                    ? 'bg-gray-700 text-gray-100'
                    : 'text-gray-400 hover:text-gray-100 hover:bg-gray-700'
                }`}
              >
                <Home size={20} />
                <span>Log Time</span>
              </Link>
            </li>
            <li>
              <Link
                to="/statistics"
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive('/statistics')
                    ? 'bg-gray-700 text-gray-100'
                    : 'text-gray-400 hover:text-gray-100 hover:bg-gray-700'
                }`}
              >
                <BarChart2 size={20} />
                <span>Statistics</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;