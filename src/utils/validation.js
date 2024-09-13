export function validateInput(name, value) {
  switch (name) {
    case 'initialInvestment':
    case 'annualInvestment':
      return value >= 0 ? '' : 'Value must be a positive number';
    case 'investmentLength':
      return value > 0 ? '' : 'Value must be a positive integer';
    case 'estimatedReturn':
      return value >= 0 && value <= 100 ? '' : 'Value must be between 0 and 100';
    default:
      return '';
  }
}

export const validateInputs = (numStores, numEmployees, hourlySalary, cactusLicenseCost) => {
  const errors = {};

  if (!numStores || numStores <= 0) {
    errors.numStores = 'Number of stores must be greater than 0';
  }

  if (!numEmployees || numEmployees <= 0) {
    errors.numEmployees = 'Number of employees must be greater than 0';
  }

  if (!hourlySalary || hourlySalary <= 0) {
    errors.hourlySalary = 'Hourly salary must be greater than 0';
  }

  if (cactusLicenseCost === undefined || cactusLicenseCost < 0) {
    errors.cactusLicenseCost = 'Cactus License Cost must be 0 or greater';
  }

  return errors;
};