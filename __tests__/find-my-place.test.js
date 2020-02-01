const findMyPlace = require('../src/find-my-place');

describe('Find My Place in an Array', () => {
  it('should return the correct index in between values', () => {
    const result = findMyPlace([1, 2, 3, 4], 2);
    expect(result).toEqual(1);
  });

  it('should return the correct index with unordered values', () => {
    const result = findMyPlace([-4, -22, 10.2, -999], -3);
    expect(result).toEqual(3);
  });

  it('should return the first index', () => {
    const result = findMyPlace([1, 2, 3, 4], -999);
    expect(result).toEqual(0);
  });

  it('should return the last index', () => {
    const result = findMyPlace([1, 2, 3, 4], 5);
    expect(result).toEqual(4);
  });
});
