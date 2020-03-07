const findMissingLowestPositiveInteger = require('../src/missing-integer');

describe('Find the Missing Lowest Integer', () => {
  it('should return 1 with an empty array', () => {
    const result = findMissingLowestPositiveInteger([]);
    expect(result).toEqual(1);
  });

  it('should return 1 with all negative numbers', () => {
    const result = findMissingLowestPositiveInteger([-1, -2, -3]);
    expect(result).toEqual(1);
  });

  it('should return correctly', () => {
    const result = findMissingLowestPositiveInteger([99, 102, 999]);
    expect(result).toEqual(100);
  });

  it('should return correctly with negative numbers', () => {
    const result = findMissingLowestPositiveInteger([-99, -999, 4, 5]);
    expect(result).toEqual(6);
  });
});
