const addTogether = require('../src/add-together');

describe('Add Together', () => {
  it('should return undefined if any value is not a number', () => {
    const result = addTogether(1, '2');
    const curriedResult = addTogether(1)([1]);
    expect(result).toEqual(undefined);
    expect(curriedResult).toEqual(undefined);
  });

  it('should return sum directly from the function', () => {
    const result = addTogether(2, 3);
    expect(result).toEqual(5);
  });

  it('should return the sum after the curried function', () => {
    const result = addTogether(2)(3);
    expect(result).toEqual(5);
  });
});
