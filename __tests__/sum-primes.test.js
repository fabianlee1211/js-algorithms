const { sumPrimes, isPrime } = require('../src/sum-primes');

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

describe('Is Prime', () => {
  it('should return true', () => {
    const result = isPrime(17);
    expect(result).toBeTruthy();
  });

  it('should return false', () => {
    const result = isPrime(16);
    expect(result).toBeFalsy();
  });

  it('should return false when number is 1', () => {
    const result = isPrime(1);
    expect(result).toBeFalsy();
  });
});
