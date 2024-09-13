import React from 'react';
import ResultCard from './ResultCard';
import { motion } from 'framer-motion';
import '../styles/Results.css';

function Results({ results }) {
  const mainResults = [
    { 
      title: 'ROI Year One', 
      value: results.roiYear1 || '0%', 
      color: 'bg-accent text-text-dark',
      explanation: 'Return on Investment for the first year, calculated as (Net Savings Year 1 / Total Investment Year 1) * 100'
    },
    { 
      title: 'Hours Saved per Store per Day', 
      value: results.hoursSavedPerStorePerDay || '0', 
      color: 'bg-primary text-text-light',
      explanation: 'The average number of labor hours saved per store each day due to the implementation of Cactus AI'
    },
    { 
      title: 'Net Savings Subsequent Years', 
      value: results.netSavingsSubsequentYears || '$0', 
      color: 'bg-secondary text-accent', 
      customClass: 'consecutive-savings',
      explanation: 'The annual net savings expected in years following the first year of implementation'
    },
  ];

  const costSavings = [
    { 
      title: 'Annual Cost Savings', 
      value: results.annualCostSavings || '$0', 
      color: 'bg-green-100 text-green-800',
      explanation: 'The total amount saved annually due to increased efficiency and reduced labor costs'
    },
    { 
      title: 'Net Savings Year 1', 
      value: results.netSavingsYear1 || '$0', 
      color: 'bg-green-200 text-green-800',
      explanation: 'The total savings in the first year after subtracting implementation costs'
    },
  ];

  const timeSavings = [
    { 
      title: 'Annual Labor Hours Saved', 
      value: results.annualLaborHoursSaved || '0', 
      color: 'bg-blue-100 text-blue-800',
      explanation: 'The total number of labor hours saved across all stores in a year'
    },
    { 
      title: 'Total Hours Saved per Day', 
      value: results.totalHoursSavedPerDay || '0', 
      color: 'bg-blue-200 text-blue-800',
      explanation: 'The total number of labor hours saved across all stores in a single day'
    },
  ];

  const costs = [
    { 
      title: 'Total Pre-Implementation Costs', 
      value: results.totalPreImplementationCosts || '$0', 
      color: 'bg-red-100 text-red-800',
      explanation: 'The total annual costs before implementing Cactus AI'
    },
    { 
      title: 'Total Costs Year 1', 
      value: results.totalCostsYear1 || '$0', 
      color: 'bg-red-200 text-red-800',
      explanation: 'The total costs in the first year, including implementation and annual costs'
    },
    { 
      title: 'Annual Costs Post-Implementation', 
      value: results.totalAnnualCostsPostImplementation || '$0', 
      color: 'bg-red-300 text-red-800',
      explanation: 'The ongoing annual costs after implementing Cactus AI'
    },
  ];

  const additionalMetrics = [
    { 
      title: 'ROI Subsequent Years', 
      value: results.roiSubsequentYears || '0%', 
      color: 'bg-purple-100 text-purple-800',
      explanation: 'Return on Investment for years following the first year of implementation'
    },
    { 
      title: 'Payback Period (Months)', 
      value: results.paybackPeriodMonths || '0', 
      color: 'bg-purple-200 text-purple-800',
      explanation: 'The number of months it takes to recover the initial investment'
    },
    { 
      title: 'Initial Setup Cost', 
      value: results.initialSetupCost || '$0', 
      color: 'bg-purple-300 text-purple-800',
      explanation: 'The one-time cost to set up Cactus AI across all stores'
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="results-section"
      aria-label="Results"
    >
      <div className="results-container">
        <h3 className="results-title">Results</h3>
        
        <div className="results-subsection">
          <div className="results-grid">
            {mainResults.map((result, index) => (
              <ResultCard key={index} {...result} index={index} isMainCard={true} />
            ))}
          </div>
        </div>

        <div className="results-subsection">
          <h4 className="results-subsection-title">Cost Savings</h4>
          <div className="results-subsection-grid">
            {costSavings.map((result, index) => (
              <ResultCard key={index} {...result} index={index} />
            ))}
          </div>
        </div>

        <div className="results-subsection">
          <h4 className="results-subsection-title">Time Savings</h4>
          <div className="results-subsection-grid">
            {timeSavings.map((result, index) => (
              <ResultCard key={index} {...result} index={index} />
            ))}
          </div>
        </div>

        <div className="results-subsection">
          <h4 className="results-subsection-title">Costs</h4>
          <div className="results-subsection-grid-3">
            {costs.map((result, index) => (
              <ResultCard key={index} {...result} index={index} />
            ))}
          </div>
        </div>

        <div className="results-subsection">
          <h4 className="results-subsection-title">Additional Metrics</h4>
          <div className="results-subsection-grid-3">
            {additionalMetrics.map((result, index) => (
              <ResultCard key={index} {...result} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Results;