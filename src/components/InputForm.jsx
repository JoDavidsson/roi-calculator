import React, { useState } from 'react';
import { motion } from 'framer-motion';

function InputForm({ onCalculate }) {
  const [formData, setFormData] = useState({
    numStores: '',
    numEmployees: '',
    hourlySalary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numStores = parseFloat(formData.numStores);
    const numEmployees = parseFloat(formData.numEmployees);
    const hourlySalary = parseFloat(formData.hourlySalary);

    if (numStores <= 0 || numEmployees <= 0 || hourlySalary <= 0) {
      alert("All input values must be greater than zero.");
      return;
    }

    onCalculate({ numStores, numEmployees, hourlySalary });
  };

  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.form 
          id="roi-input-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit} 
          className="max-w-lg mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-text-dark">Enter ROI Details</h3>
          {Object.entries(formData).map(([key, value], index) => (
            <motion.div 
              key={key} 
              className="mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <label htmlFor={key} className="block text-text-dark font-bold mb-2 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <input
                type="number"
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200 text-text-dark"
                required
                min="0"
                step={key === 'hourlySalary' ? '0.01' : '1'}
              />
            </motion.div>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit" 
            className="w-full bg-accent hover:bg-opacity-90 text-text-dark font-bold py-2 md:py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          >
            Calculate ROI
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default InputForm;