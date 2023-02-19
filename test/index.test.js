const factorial = require('../src');

describe('Factorial', () => {
  it('correctly computes factorial of a positive integer number', () => {
    expect(factorial(3)).toEqual(6);
  });

  it('throws an error if a negative input is provided', () => {
    expect(() => factorial(-1)).toThrow(
      'Factorial of negative number is not defined'
    );
  });
});
