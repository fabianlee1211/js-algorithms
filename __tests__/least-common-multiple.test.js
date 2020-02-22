const {
  leastCommonMultiple,
  greatestCommonFactor,
} = require('../src/least-common-multiple');

describe('Least Common Multiple', () => {
  it('should return undefined with zero', () => {
    const result = leastCommonMultiple([0, 5]);
    expect(result).toEqual(undefined);
  });

  it('should return the duplicate value', () => {
    const result = leastCommonMultiple([5, 5]);
    expect(result).toEqual(5);
  });

  it('should return LCM correctly', () => {
    const result = leastCommonMultiple([1, 5]);
    expect(result).toEqual(60);
  });
});

describe('Greatest Common Factor', () => {
  it('should return GCF correctly', () => {
    const result = greatestCommonFactor([50, 125]);
    expect(result).toEqual(25);
  });

  it('should return GCF of two equal numbers correctly', () => {
    const result = greatestCommonFactor([5, 5]);
    expect(result).toEqual(5);
  });
});
