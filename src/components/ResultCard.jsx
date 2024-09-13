import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ResultCard.css';

function ResultCard({ title, value, explanation, index, isMainCard = false }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className={`result-card ${isMainCard ? 'result-card-main' : 'result-card-secondary'}`}
      tabIndex={0}
      role="region"
      aria-label={title}
    >
      <div className="result-card-header">
        <h5 className={isMainCard ? 'result-card-title-main' : 'result-card-title-secondary'}>{title}</h5>
        {explanation && (
          <button
            className="info-button"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            aria-label={`Information about ${title}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
      <p className={isMainCard ? 'result-card-value-main' : 'result-card-value-secondary'}>{value}</p>
      {showTooltip && explanation && (
        <div className="tooltip">
          {explanation}
        </div>
      )}
    </motion.div>
  );
}

export default ResultCard;