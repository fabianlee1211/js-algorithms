const flatten = require('../src/flatten');

describe('Flatten Infinite Depth Array', () => {
  it('should flatten the array', () => {
    const result = flatten([[1], [2]]);
    expect(result).toEqual([1, 2]);
  });

  it('should flatten the deep array', () => {
    const result = flatten([[1, [2, [3]]], [4]]);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should flatten the crazy deep array with string', () => {
    const result = flatten([
      [1, ['two', [3]]],
      ['four', [[[[['five', 6]]]]]],
    ]);
    expect(result).toEqual([1, 'two', 3, 'four', 'five', 6]);
  });

  it('should flatten the crazy deep array with different data types', () => {
    const result = flatten([
      [{}, [null, undefined]],
      ['four', [[[[[true, 4321]]]]]],
    ]);
    expect(result).toEqual([{}, null, undefined, 'four', true, 4321]);
  });
});
