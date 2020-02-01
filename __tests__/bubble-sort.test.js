const bubbleSort = require('../bubble-sort');

describe('Bubble Sort', () => {
  it('should sort correctly', () => {
    const arr = bubbleSort([3, 1, 2]);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('should sort correctly with repeated values', () => {
    const arr = bubbleSort([3, 3, 1, 2]);
    expect(arr).toEqual([1, 2, 3, 3]);
  });

  it('should sort correctly with negative values', () => {
    const arr = bubbleSort([-1, -99, 777, 2]);
    expect(arr).toEqual([-99, -1, 2, 777]);
  });

  it('should sort correctly with float values', () => {
    const arr = bubbleSort([-1.001, -1.0001, -10.01, -10.1]);
    expect(arr).toEqual([-10.1, -10.01, -1.001, -1.0001]);
  });
});
