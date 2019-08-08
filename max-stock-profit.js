/**
 * Gets the max profit from buying and selling a stock
 * @param {array} prices Prices of a stock listed in time order
 * @return {number} Max profit
 */

 // O(n^2)
 function getMaxStockProfit(prices) {
  let maxProfit
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i; j < prices.length - 1; j++) {
      const profit = prices[j+1] - prices[i]
      if (i === 0) {
        maxProfit = profit
        continue
      }
      maxProfit = profit > maxProfit ? profit : maxProfit
    }
  }
  return maxProfit
}

// O(n)
function getMaxStockProfit(prices) {
  const minPrice = Math.min(...prices)
  const pricesAfterMinPrice = prices.slice(prices.indexOf(minPrice) + 1)
  const maxPriceAfterMinPrice = Math.max(...pricesAfterMinPrice)
  return maxPriceAfterMinPrice - minPrice
}

