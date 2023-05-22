// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Main Solution
let topKFrequent = function(nums, k) {
  const freq = {};
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  
  return sorted.slice(0, k).map((pair) => parseInt(pair[0]));
}

// Explanation



// var topKFrequent = function(nums, k) {
// This line declares a function named topKFrequent that takes two parameters: nums (an array of numbers) and k (the number of most frequent elements to return).


//   const freq = {};
// This line initializes an empty object named freq. This object will be used to store the frequency of each number in the nums array.


//   for (const num of nums) {
//     freq[num] = (freq[num] || 0) + 1;
//   }
// This is a loop that iterates over each element num in the nums array. It updates the freq object by incrementing the count for each num. If num is not already a property in the freq object, it initializes it to 0 before incrementing.


//   const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
// This line converts the freq object into an array of key-value pairs using Object.entries(freq). Then it sorts the array in descending order based on the second element of each pair (the frequency). This will give us an array of pairs sorted by frequency from highest to lowest. The result is assigned to the sorted variable.


//   return sorted.slice(0, k).map((pair) => parseInt(pair[0]));
// This line returns a new array that contains only the first k pairs from the sorted array using slice(0, k). It then maps each pair to its first element (the number) after converting it to an integer using parseInt. The resulting array contains the k most frequent numbers.

// So, the overall purpose of this code is to find the k most frequent numbers in the nums array and return them in an array.

// Alternative Solution
var topKFrequent = function(nums, k) {
    const count = {}
    nums.forEach(n => count[n] = (count[n] || 0) + 1)
    return Object.keys(count).sort((a, b) => count[b] - count[a]).slice(0, k)
};