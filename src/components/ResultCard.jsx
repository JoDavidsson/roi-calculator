import React from 'react';
import { motion } from 'framer-motion';

function ResultCard({ title, value, color, index, isMainCard = false, customClass = '' }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: isMainCard ? 1.05 : 1.02 }}
      className={`${color} ${isMainCard ? 'p-6 md:p-8' : 'p-4 md:p-6'} rounded-lg shadow-md ${isMainCard ? 'shadow-lg' : ''} ${customClass}`}
      tabIndex={0}
      role="region"
      aria-label={title}
    >
      <h5 className={`${isMainCard ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} font-bold mb-2`}>{title}</h5>
      <p className={`${isMainCard ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} font-bold`}>{value}</p>
    </motion.div>
  );
}

export default ResultCard;