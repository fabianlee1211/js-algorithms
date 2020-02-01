const uniqueValues = require('../src/unique-array-values');

describe('Unique Array Values', () => {
  it('should return the correct unique values', () => {
    const result = uniqueValues([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4]);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
