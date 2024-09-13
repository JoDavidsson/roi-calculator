import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { defaultValues } from '../config/defaultValues';

function InputForm({ onCalculate }) {
  const [formData, setFormData] = useState({
    numStores: '',
    numEmployees: '',
    hourlySalary: '',
    cactusLicenseCost: defaultValues.cactusAiMonthlyCostPerStore.toString()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Only allow numeric input
    const numericValue = value.replace(/[^0-9]/g, '');
    setFormData(prevData => ({ ...prevData, [name]: numericValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numStores = parseInt(formData.numStores, 10);
    const numEmployees = parseInt(formData.numEmployees, 10);
    const hourlySalary = parseInt(formData.hourlySalary, 10);
    const cactusLicenseCost = parseInt(formData.cactusLicenseCost, 10);

    if (numStores <= 0 || numEmployees <= 0 || hourlySalary <= 0 || cactusLicenseCost < 0) {
      alert("All input values must be greater than zero (Cactus License Cost can be zero).");
      return;
    }

    onCalculate({ numStores, numEmployees, hourlySalary, cactusLicenseCost });
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.form 
          id="roi-input-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit} 
          className="max-w-lg mx-auto bg-primary p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-textLight">Enter ROI Details</h2>
          {Object.entries(formData).map(([key, value], index) => (
            <motion.div 
              key={key} 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <label htmlFor={key} className="label capitalize">
                {key === 'cactusLicenseCost' ? 'Cactus License Cost (per store per month)' : key.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <input
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                className="input"
                required
                pattern="^[0-9]+$"
                title="Please enter a whole number"
              />
            </motion.div>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit" 
            className="btn btn-primary w-full text-lg"
          >
            Calculate ROI
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default InputForm;