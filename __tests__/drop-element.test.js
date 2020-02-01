const dropElements = require('../src/drop-elements');

describe('Drop Element', () => {
  it('should return an empty array', () => {
    const result = dropElements([], () => {});
    expect(result).toEqual([]);
    expect(result).toHaveLength(0);
  });

  it('should drop elements correctly', () => {
    const result = dropElements([1, 2, 3], value => {
      return value >= 2;
    });
    expect(result).toHaveLength(2);
    expect(result).toEqual([2, 3]);
  });
});
