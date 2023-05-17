// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// Main Solution
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
};

// Alternative Solution
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyPrice = prices[0];
  let max_profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (buyPrice > prices[i]) {
      buyPrice = prices[i];
    } else if (prices[i] - buyPrice > max_profit)
      max_profit = prices[i] - buyPrice;
  }
  return max_profit;
};

// Explanation



// var maxProfit = function(prices) {: This line defines a function named maxProfit that takes an array prices as an input parameter. The function is assigned to the variable maxProfit.

// let buyPrice = prices[0];: This line initializes a variable buyPrice with the first element of the prices array. It represents the price at which a stock is bought initially.

// let max_profit = 0;: This line initializes a variable max_profit with a value of 0. It represents the maximum profit that can be obtained.

// for (let i = 1; i < prices.length; i++) {: This line starts a loop that iterates over the prices array, starting from the second element (i = 1) up to the last element (i < prices.length).

// if (buyPrice > prices[i]){: This line checks if the current buyPrice is greater than the price at index i in the prices array. If it is, it means there is a better buying opportunity, so we update the buyPrice to the new lower price.

// buyPrice = prices[i];: This line assigns the new lower price at index i to the buyPrice variable.

// }else if (prices[i] - buyPrice > max_profit): This line checks if the difference between the price at index i and buyPrice is greater than the current max_profit. If it is, it means we have found a new maximum profit, so we update the max_profit accordingly.

// max_profit = prices[i] - buyPrice;: This line calculates the new maximum profit by subtracting the buyPrice from the price at index i and assigns it to the max_profit variable.

// }: This closing curly brace marks the end of the for loop.

// return max_profit;: This line returns the final max_profit value calculated by the function.

// };: This closing curly brace marks the end of the maxProfit function.

// In summary, the code calculates the maximum profit that can be obtained by buying and selling a stock at different prices from the prices array. It iterates over the array, updates the buyPrice if a better buying opportunity is found, and calculates the maximum profit based on the difference between the selling price and the buyPrice. Finally, it returns the maximum profit.