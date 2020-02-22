const sumPrimes = require('../src/sum-primes');

describe('Sum Primes', () => {
  it('should return sum of primes correctly', () => {
    const result = sumPrimes(977);
    expect(result).toEqual(73156);
  });

  it('should return 0 when number is 1', () => {
    const result = sumPrimes(1);
    expect(result).toEqual(0);
  });
});
