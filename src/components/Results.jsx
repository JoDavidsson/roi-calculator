import React from 'react';
import ResultCard from './ResultCard';
import { motion } from 'framer-motion';
import '../styles/Results.css';

function Results({ results }) {
  console.log('Results data:', results);
  const sections = [
    {
      title: 'Main Results',
      items: [
        { title: 'ROI Year One', value: results.roiYear1, explanation: 'Return on Investment for the first year' },
        { title: 'Hours Saved per Store per Day', value: results.hoursSavedPerStorePerDay, explanation: 'Average labor hours saved per store daily' },
        { title: 'Net Savings Subsequent Years', value: results.netSavingsSubsequentYears, explanation: 'Annual net savings after the first year' },
      ],
    },
    {
      title: 'Cost Savings',
      items: [
        { title: 'Annual Cost Savings', value: results.annualCostSavings, explanation: 'Total amount saved annually' },
        { title: 'Net Savings Year 1', value: results.netSavingsYear1, explanation: 'Total savings in the first year' },
      ],
    },
    {
      title: 'Time Savings',
      items: [
        { title: 'Annual Labor Hours Saved', value: `${results.annualLaborHoursSaved} hours`, explanation: 'Total labor hours saved across all stores annually' },
        { title: 'Total Hours Saved per Day', value: `${results.totalHoursSavedPerDay} hours`, explanation: 'Total labor hours saved across all stores daily' },
      ],
    },
    {
      title: 'Costs',
      items: [
        { title: 'Total Pre-Implementation Costs', value: results.totalPreImplementationCosts, explanation: 'Annual costs before implementing Cactus AI' },
        { title: 'Total Costs Year 1', value: results.totalCostsYear1, explanation: 'Total costs in the first year' },
        { title: 'Annual Costs Post-Implementation', value: results.totalAnnualCostsPostImplementation, explanation: 'Ongoing annual costs after implementation' },
        { title: 'Annual Cactus License Cost (per store)', value: results.cactusLicenseCost, explanation: 'Annual cost of Cactus AI license per store' },
      ],
    },
    {
      title: 'Additional Metrics',
      items: [
        { title: 'ROI Subsequent Years', value: results.roiSubsequentYears, explanation: 'Return on Investment for years after the first' },
        { title: 'Payback Period (Months)', value: results.paybackPeriodMonths, explanation: 'Time to recover the initial investment' },
        { title: 'Initial Setup Cost', value: results.initialSetupCost, explanation: 'One-time cost to set up Cactus AI' },
      ],
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
        
        {sections.map((section, sectionIndex) => (
          <motion.div 
            key={section.title}
            className="results-subsection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
          >
            <h4 className="results-subsection-title">{section.title}</h4>
            <div className={`results-grid ${section.title === 'Main Results' ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
              {section.items.map((item, index) => (
                <ResultCard 
                  key={item.title}
                  title={item.title}
                  value={item.value}
                  explanation={item.explanation}
                  index={index}
                  isMainCard={section.title === 'Main Results'}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Results;