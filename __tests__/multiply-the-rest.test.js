const multiplyTheRest = require('../src/multiply-the-rest');

describe('Multiply The Rest', () => {
  it('should multiply correctly', () => {
    const result = multiplyTheRest([1, 2, 3]);
    expect(result).toEqual([6, 3, 2]);
  });

  it('should multiply correctly with negative number', () => {
    const result = multiplyTheRest([-1, 5, 3]);
    expect(result).toEqual([15, -3, -5]);
  });
});
