import { defaultValues } from '../config/defaultValues';

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

const formatPercentage = (value) => {
  return `${value.toFixed(0)}%`;
};

const formatNumber = (value) => {
  return value.toFixed(1);
};

export function calculateROI(inputData) {
  try {
    const { numStores, numEmployees, hourlySalary } = inputData;
    
    if (!numStores || !numEmployees || !hourlySalary) {
      throw new Error('Invalid input data: All fields are required');
    }

    if (numStores <= 0 || numEmployees <= 0 || hourlySalary <= 0) {
      throw new Error('Invalid input data: All values must be positive');
    }

    const {
      daysPerYear,
      minutesPerHour,
      tasksPerStorePerDay,
      minutesPerTaskPlacement,
      skusPerStorePerDay,
      minutesPerSkuRepositioning,
      minutesSavedPerTask,
      minutesSavedPerHandover,
      minutesSavedPerSkuSearch,
      initialSetupCostPerStore,
      annualDomainMaintenancePerStore,
      cactusAiMonthlyCostPerStore,
      cloudCostsPercentage
    } = defaultValues;

    // Pre-Implementation Costs (Current Operational Costs)
    const annualCostSpentPlacingTasks = (tasksPerStorePerDay * minutesPerTaskPlacement / minutesPerHour) * hourlySalary * numStores * daysPerYear;
    const annualCostSpentRepositioningSKUs = (skusPerStorePerDay * minutesPerSkuRepositioning / minutesPerHour) * hourlySalary * numStores * daysPerYear;
    const totalPreImplementationCosts = annualCostSpentPlacingTasks + annualCostSpentRepositioningSKUs;

    // Post-Implementation Costs
    const initialSetupCost = initialSetupCostPerStore * numStores;
    const annualDomainMaintenanceCost = annualDomainMaintenancePerStore * numStores;
    const cactusAiAnnualCost = cactusAiMonthlyCostPerStore * 12 * numStores;
    const cloudCosts = cactusAiAnnualCost * cloudCostsPercentage;
    const totalAnnualCostsPostImplementation = annualDomainMaintenanceCost + cactusAiAnnualCost + cloudCosts;
    const totalCostsYear1 = totalAnnualCostsPostImplementation + initialSetupCost;

    // Time and Cost Savings
    const totalMinutesSavedPerStorePerDay = (tasksPerStorePerDay * minutesSavedPerTask) + (numEmployees * minutesSavedPerHandover) + (numEmployees * minutesSavedPerSkuSearch);
    const hoursSavedPerStorePerDay = totalMinutesSavedPerStorePerDay / minutesPerHour;
    const totalHoursSavedPerDay = hoursSavedPerStorePerDay * numStores;
    const annualLaborHoursSaved = totalHoursSavedPerDay * daysPerYear;
    const annualCostSavings = annualLaborHoursSaved * hourlySalary;

    // Net Savings
    const netSavingsYear1 = annualCostSavings - totalCostsYear1;
    const netSavingsSubsequentYears = annualCostSavings - totalAnnualCostsPostImplementation;

    // ROI Calculations
    const roiYear1 = (netSavingsYear1 / totalCostsYear1) * 100;
    const roiSubsequentYears = (netSavingsSubsequentYears / totalAnnualCostsPostImplementation) * 100;

    // Payback Period
    const paybackPeriodMonths = (totalCostsYear1 / netSavingsSubsequentYears) * 12;

    return {
      totalPreImplementationCosts: formatCurrency(totalPreImplementationCosts),
      initialSetupCost: formatCurrency(initialSetupCost),
      totalAnnualCostsPostImplementation: formatCurrency(totalAnnualCostsPostImplementation),
      totalCostsYear1: formatCurrency(totalCostsYear1),
      hoursSavedPerStorePerDay: formatNumber(hoursSavedPerStorePerDay),
      annualLaborHoursSaved: formatNumber(annualLaborHoursSaved),
      annualCostSavings: formatCurrency(annualCostSavings),
      netSavingsYear1: formatCurrency(netSavingsYear1),
      netSavingsSubsequentYears: formatCurrency(netSavingsSubsequentYears),
      roiYear1: formatPercentage(roiYear1),
      roiSubsequentYears: formatPercentage(roiSubsequentYears),
      paybackPeriodMonths: formatNumber(paybackPeriodMonths),
      annualCostSpentPlacingTasks: formatCurrency(annualCostSpentPlacingTasks),
      annualCostSpentRepositioningSKUs: formatCurrency(annualCostSpentRepositioningSKUs),
      cloudCosts: formatCurrency(cloudCosts)
    };

  } catch (error) {
    console.error('Error in ROI calculation:', error);
    return {
      error: error.message
    };
  }
}
