export function calculateNumerology(birthdate) {
  const dateNumbers = birthdate.split('-').join('').split('').map(Number);
  const sum = dateNumbers.reduce((acc, curr) => acc + curr, 0);
  
  if (sum === 11 || sum === 22) {
    return sum;
  }
  
  return sum > 9 ? sum.toString().split('').map(Number).reduce((acc, curr) => acc + curr, 0) : sum;
}
