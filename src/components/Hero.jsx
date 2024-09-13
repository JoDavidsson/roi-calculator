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
    <section className="bg-primary text-textLight py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Calculate Your ROI
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
        >
          Discover the potential return on your investment with our easy-to-use calculator.
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary text-lg px-8 py-3"
          onClick={scrollToInputForm}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;