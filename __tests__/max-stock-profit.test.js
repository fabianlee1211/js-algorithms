const getMaxStockProfit = require('../src/max-stock-profit');

describe('Max Stock Profit', () => {
  it('should return the max profit correctly', () => {
    const result = getMaxStockProfit([1, 10, 6, 3]);
    expect(result).toEqual(9);
  });

  it('should return 0 max profit when prices are the same', () => {
    const result = getMaxStockProfit([10, 10]);
    expect(result).toEqual(0);
  });

  it('should return 0 max profit when prices are in descending order', () => {
    const result = getMaxStockProfit([10, 10, 6, 3]);
    expect(result).toEqual(0);
  });
});
