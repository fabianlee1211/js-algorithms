/**
 * Gets the max profit from buying and selling a stock
 * @param {array} prices Prices of a stock listed in time order
 * @return {number} Max profit
 */
module.exports = function getMaxStockProfit(prices) {
  const minPrice = Math.min(...prices);
  const pricesAfterMinPrice = prices.slice(prices.indexOf(minPrice) + 1);
  if (!pricesAfterMinPrice.length) return 0;
  else {
    const maxPriceAfterMinPrice = Math.max(...pricesAfterMinPrice);
    return maxPriceAfterMinPrice - minPrice;
  }
};
