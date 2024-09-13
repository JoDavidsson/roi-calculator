import React from 'react';
import ResultCard from './ResultCard';
import { motion } from 'framer-motion';

function Results({ results }) {
  const mainResults = [
    { title: 'ROI Year One', value: results.roiYear1 || '0%', color: 'bg-accent text-text-dark' },
    { title: 'Hours Saved per Store', value: results.hoursSavedPerStore || '0', color: 'bg-primary text-text-light' },
    { title: 'Consecutive Savings', value: results.consecutiveSavings || '$0', color: 'bg-secondary text-accent', customClass: 'consecutive-savings' },
  ];

  const additionalResults = [
    { title: 'Net Savings Year 1', value: results.netSavingsYear1 || '$0', color: 'bg-accent bg-opacity-20 text-text-dark' },
    { title: 'Net Savings Subsequent Years', value: results.netSavingsSubsequentYears || '$0', color: 'bg-accent bg-opacity-30 text-text-dark' },
    { title: 'Cost Savings per Year', value: results.costSavingsPerYear || '$0', color: 'bg-accent bg-opacity-10 text-text-dark' },
    { title: 'Staff Costs per Year', value: results.staffCostsPerYear || '$0', color: 'bg-primary bg-opacity-10 text-text-dark' },
    { title: 'Task Placement Cost per Year', value: results.taskPlacementCostPerYear || '$0', color: 'bg-primary bg-opacity-20 text-text-dark' },
    { title: 'SKU Repositioning Cost per Year', value: results.skuRepositioningCostPerYear || '$0', color: 'bg-primary bg-opacity-30 text-text-dark' },
    { title: 'Cloud Costs per Year', value: results.cloudCostsPerYear || '$0', color: 'bg-primary bg-opacity-40 text-text-dark' },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-16 bg-secondary"
      aria-label="Results"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center text-text-dark">Results</h3>
        
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {mainResults.map((result, index) => (
              <ResultCard key={index} {...result} index={index} isMainCard={true} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl md:text-2xl font-bold mb-4 text-text-dark">Additional Details</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {additionalResults.map((result, index) => (
              <ResultCard key={index} {...result} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Results;