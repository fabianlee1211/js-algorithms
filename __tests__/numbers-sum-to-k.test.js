const includesNumbersSumtoK = require('../src/numbers-sum-to-k');

describe('Includes Numbers sum to k', () => {
  it('should return true', () => {
    const result = includesNumbersSumtoK([1, 3, 4], 7);
    expect(result).toBeTruthy();
  });

  it('should return true with negative numbers', () => {
    const result = includesNumbersSumtoK([-5, 3, 4], -1);
    expect(result).toBeTruthy();
  });

  it('should return false', () => {
    const result = includesNumbersSumtoK([1, 3], 7);
    expect(result).toBeFalsy();
  });
});
