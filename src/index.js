// Computes a factorial of a given positive integer
function factorial(n) {
  if (n < 0) {
    throw new Error('Factorial of negative number is not defined');
  }

  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

module.exports = factorial;
