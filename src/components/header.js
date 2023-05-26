import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ logoutUser }) => {
  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold text-lg">Home</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link to="/ingredients" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Kitchen</Link>
                <Link to="/ingredients/new" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">New</Link>
                <Link to="/user/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</Link>
                <Link to="/user/register" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/" onClick={logoutUser} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
