import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const TabNavigation = () => {
  const location = useLocation();

  // Only show tabs on the home route
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <nav className="flex space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              clsx(
                'py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors',
                isActive
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )
            }
          >
            Directorio de Negocios
          </NavLink>
          <NavLink
            to="/social"
            className={({ isActive }) =>
              clsx(
                'py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors',
                isActive
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )
            }
          >
            Publicaciones
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;