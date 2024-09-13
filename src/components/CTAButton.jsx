import React from 'react';
import { motion } from 'framer-motion';

function CTAButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`btn btn-primary ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default CTAButton;