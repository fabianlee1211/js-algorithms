const diffArray = require('../diff-arrays');

describe('Diff in 2 Arrays', () => {
  it('should return an empty array', () => {
    const result = diffArray([1], [1]);
    expect(result).toEqual([]);
  });

  it('should return the diff correctly', () => {
    const result = diffArray([1, 2, 3], [1]);
    expect(result).toEqual([2, 3]);
  });

  it('should return the diff correctly with repeated values', () => {
    const result = diffArray([1, 1, 2, 2, 3], [1]);
    expect(result).toEqual([2, 2, 3]);
  });
});
