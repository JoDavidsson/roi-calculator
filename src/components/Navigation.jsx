import React from 'react';

function Navigation() {
  return (
    <nav className="py-2 md:py-0" aria-label="Main">
      <ul className="flex flex-col md:flex-row md:space-x-6">
        <li className="py-2 md:py-0"><a href="#" className="hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white p-2">Home</a></li>
        <li className="py-2 md:py-0"><a href="#" className="hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white p-2">About</a></li>
        <li className="py-2 md:py-0"><a href="#" className="hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white p-2">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;