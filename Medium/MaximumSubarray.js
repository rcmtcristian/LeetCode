// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Main Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

// Explanation
// The Kadane's algorithm is used to find the maximum subarray sum.

// 1. `let maxSum = nums[0];`
//    - This initializes the variable `maxSum` to the first element of the `nums` array. It assumes that the first element is the maximum sum initially.

// 2. `let currentSum = nums[0];`
//    - This initializes the variable `currentSum` to the first element of the `nums` array. It represents the sum of the current subarray being considered.

// 3. `for (let i = 1; i < nums.length; i++) {`
//    - This starts a `for` loop that iterates over the elements of the `nums` array, starting from the second element (index 1) and going up to the last element.

// 4. `currentSum = Math.max(nums[i], currentSum + nums[i]);`
//    - This line calculates the maximum sum between the current element `nums[i]` and the sum of the previous subarray `currentSum` plus the current element. It ensures that `currentSum` always represents the maximum sum subarray ending at the current index `i`.

// 5. `maxSum = Math.max(maxSum, currentSum);`
//    - This line updates the `maxSum` variable by taking the maximum value between the current `maxSum` and the `currentSum`. It keeps track of the overall maximum sum found so far.

// 6. `}`
//    - This marks the end of the `for` loop.

// 7. `return maxSum;`
//    - Finally, the function returns the `maxSum`, which represents the maximum subarray sum.

// In summary, this code iterates through the `nums` array, updating `currentSum` to track the maximum sum subarray ending at each index. It also keeps track of the overall maximum sum in the `maxSum` variable. At the end, it returns the maximum subarray sum.

// Time Complexity
// The time complexity of this solution is O(n), where n is the length of the `nums` array. This is because the algorithm iterates through the `nums` array once.

// Space Complexity
// The space complexity of this solution is O(1) because the algorithm only uses constant extra space.

// Alternative Solution
var maxSubArray = function(nums) {
  let curr = nums[0]
  let max = nums[0]

  for (let i= 1; i < nums.length; i++) {
      curr = Math.max(nums[i], curr + nums[i])
      max = Math.max(max, curr)
  }

  return max;
};
