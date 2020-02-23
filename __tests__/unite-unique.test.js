const uniteUnique = require('../src/unite-unique');

describe('Unite Unique Values', () => {
  it('should return unique values correctly', () => {
    const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    expect(result).toEqual([1, 3, 2, 5, 4]);
  });

  it('should return unique values correctly with empty arrays', () => {
    const result = uniteUnique([], [], [2, 1]);
    expect(result).toEqual([2, 1]);
  });
});
