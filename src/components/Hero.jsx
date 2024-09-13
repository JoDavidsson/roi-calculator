import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const scrollToInputForm = () => {
    const inputForm = document.getElementById('roi-input-form');
    if (inputForm) {
      inputForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary text-text-light py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
        >
          Calculate Your ROI
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Discover the potential return on your investment with our easy-to-use calculator.
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent hover:bg-opacity-90 text-text-dark font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          onClick={scrollToInputForm}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;