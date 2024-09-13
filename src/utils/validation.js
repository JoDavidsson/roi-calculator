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