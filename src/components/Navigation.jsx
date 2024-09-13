import React from 'react';
import { motion } from 'framer-motion';

function Navigation() {
  return (
    <nav className="py-2 md:py-0" aria-label="Main">
      <ul className="flex flex-col md:flex-row md:space-x-6">
        {['Home', 'About', 'Contact'].map((item, index) => (
          <motion.li 
            key={item} 
            className="py-2 md:py-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <a 
              href="#" 
              className="text-textLight hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent p-2"
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;