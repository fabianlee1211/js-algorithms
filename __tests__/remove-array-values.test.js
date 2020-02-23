const removeArrayValues = require('../src/remove-array-values');

describe('Remove Array Values', () => {
  it('should remove values correctly', () => {
    const result = removeArrayValues([1, 2, 3], 2, 3);
    expect(result).toEqual([1]);
  });

  it('should return empty array', () => {
    const result = removeArrayValues([], 2, 3);
    expect(result).toEqual([]);
  });

  it('should return original array when there is no value to remove', () => {
    const result = removeArrayValues([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });
});
