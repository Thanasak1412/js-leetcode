// Best time to buy and sell stock
// You are given an array `prices` where `prices[i]` is the price of a given stock on the `i` day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
  if (prices.length === 1) {
    return 0;
  }

  let buy = prices[0];
  let sell = prices[1];
  let diff = sell - buy;

  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i] && i !== prices.length - 1) {
      buy = prices[i];
      sell = prices[i + 1];
    }

    if (sell < prices[i]) {
      sell = prices[i];
    }

    if (diff < sell - buy) {
      diff = sell - buy;
    }
  }

  return diff > 0 ? diff : 0;
}

// const prices1 = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices1));

// const prices2 = [7, 6, 4, 3, 1];
// console.log(maxProfit(prices2));

// const prices3 = [0];
// console.log(maxProfit(prices3));

// const price4 = [2, 1];
// console.log(maxProfit(price4));

// const price5 = [2, 1, 2, 1, 0, 1, 2];
// console.log(maxProfit(price5));

// const price6 = [2, 4, 1];
// console.log(maxProfit(price6));

const price7 = [3, 2, 6, 5, 0, 3];
console.log(maxProfit(price7));
