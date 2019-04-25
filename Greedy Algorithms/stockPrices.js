const stockPrices = [10, 7, 5, 8, 11, 9];

/*
* Takes an array of stock prices where each index is the stock price at a different minute. From this array, the function will return the maximum profit that can be earned.
*/
function getMaximumProfit(stockPrices) {
  if(stockPrices.length < 2) {
    throw new Error('There must be at least 2 stock prices to calculate profit');
  }

  let minimumPrice = stockPrices[0];
  let maximumProfit = stockPrices[1] - stockPrices[0];

  for(let currentIndex = 1; currentIndex < stockPrices.length - 1; currentIndex++) {
    const currentPrice = stockPrices[currentIndex];
    const currentProfit = currentPrice - minimumPrice;

    // If our maximum profit is exceeded, update it
    maximumProfit = Math.max(maximumProfit, currentProfit);
    // If our minimum price is beat, update it
    minimumPrice = Math.min(minimumPrice, currentPrice);
  }
  return maximumProfit;
}

console.log(getMaximumProfit(stockPrices));