import { defaultValues } from '../config/defaultValues';

// Helper function to format currency
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

export function calculateROI(inputData) {
  const { numStores, numEmployees, hourlySalary } = inputData;
  const {
    tasksPerStore,
    timePerTaskPlacement,
    timeSavedPerTask,
    skusPerStore,
    timePerSkuRelocation,
    timeSavedSearchingPerEmployee,
    timeSavedPerHandover,
    hoursPerShift,
    daysPerYear,
    cactusAiCostPerStorePerMonth,
    domainSetupCostPerStore,
    domainMaintenancePerStorePerYear
  } = defaultValues;

  // Staff Costs
  const staffCostsPerDay = numStores * numEmployees * hoursPerShift * hourlySalary;
  const staffCostsPerYear = staffCostsPerDay * daysPerYear;

  // Task Placement Costs
  const taskPlacementTimePerDay = (tasksPerStore * timePerTaskPlacement * numStores) / 60; // in hours
  const taskPlacementCostPerDay = taskPlacementTimePerDay * hourlySalary;
  const taskPlacementCostPerYear = taskPlacementCostPerDay * daysPerYear;

  // SKU Repositioning Costs
  const skuRepositioningTimePerDay = (skusPerStore * timePerSkuRelocation * numStores) / 60; // in hours
  const skuRepositioningCostPerDay = skuRepositioningTimePerDay * hourlySalary;
  const skuRepositioningCostPerYear = skuRepositioningCostPerDay * daysPerYear;

  // Time Savings
  const timeSavedPerDay = (
    (tasksPerStore * timeSavedPerTask) +
    (timeSavedSearchingPerEmployee * numEmployees) +
    (timeSavedPerHandover * numEmployees)
  ) * numStores / 60; // in hours

  // Cost Savings
  const costSavingsPerDay = timeSavedPerDay * hourlySalary;
  const costSavingsPerYear = costSavingsPerDay * daysPerYear;

  // Cactus AI Costs
  const cactusAiCostPerYear = cactusAiCostPerStorePerMonth * numStores * 12;
  const domainSetupCost = domainSetupCostPerStore * numStores;
  const domainMaintenanceCost = domainMaintenancePerStorePerYear * numStores;
  
  // Calculate cloud costs as 10% of Cactus license
  const cloudCostsPerYear = cactusAiCostPerYear * 0.1;
  
  const totalCostsYear1 = cactusAiCostPerYear + domainSetupCost + domainMaintenanceCost + cloudCostsPerYear;
  const totalCostsSubsequentYears = totalCostsYear1 - domainSetupCost;

  // ROI Calculations
  const netSavingsYear1 = costSavingsPerYear - totalCostsYear1;
  const netSavingsSubsequentYears = costSavingsPerYear - totalCostsSubsequentYears;
  const roiYear1 = (netSavingsYear1 / totalCostsYear1) * 100;
  const roiSubsequentYears = (netSavingsSubsequentYears / totalCostsSubsequentYears) * 100;

  // New calculations
  const hoursSavedPerStore = timeSavedPerDay / numStores;
  const consecutiveSavings = netSavingsSubsequentYears;

  return {
    staffCostsPerYear: formatCurrency(staffCostsPerYear),
    taskPlacementCostPerYear: formatCurrency(taskPlacementCostPerYear),
    skuRepositioningCostPerYear: formatCurrency(skuRepositioningCostPerYear),
    costSavingsPerYear: formatCurrency(costSavingsPerYear),
    totalCostsYear1: formatCurrency(totalCostsYear1),
    totalCostsSubsequentYears: formatCurrency(totalCostsSubsequentYears),
    netSavingsYear1: formatCurrency(netSavingsYear1),
    netSavingsSubsequentYears: formatCurrency(netSavingsSubsequentYears),
    roiYear1: `${roiYear1.toFixed(0)}%`,
    roiSubsequentYears: `${roiSubsequentYears.toFixed(0)}%`,
    hoursSavedPerStore: hoursSavedPerStore.toFixed(1),
    consecutiveSavings: formatCurrency(consecutiveSavings),
    cloudCostsPerYear: formatCurrency(cloudCostsPerYear)
  };
}