import React from 'react';
import { motion } from 'framer-motion';

function CTAButton({ children, onClick, className }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default CTAButton;