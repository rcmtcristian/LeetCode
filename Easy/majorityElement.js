// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Main Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
// Create a function called "majorityElement" that takes in an array of numbers called "nums"
var majorityElement = function (nums) {
  // Create a variable called "majority" and set it equal to the first element in the array
  let majority = nums[0];

  // Create a variable called "count" and set it equal to 1
  let count = 1;

  // Create a for loop that starts at 1 and goes up to the length of the array
  // Increment by 1
  for (let i = 1; i < nums.length; i++) {
    // Create an if statement that checks if the current element is equal to the majority
    if (nums[i] === majority) {
      // If it is, increment count by 1
      count++;

      // If not, create an else statement
    } else {
      // Decrement count by 1
      count--;

      // Create an if statement that checks if count is equal to 0
      if (count === 0) {
        // If it is, set the majority to the current element
        majority = nums[i];

        // Reset count to 1
        count = 1;

        // Close the if statement
      }

      // Close the else statement
    }

    // Close the for loop
  }

  // Create a variable called "count" and set it equal to 0
  count = 0;

  // Create a for loop that starts at 0 and goes up to the length of the array
  // Increment by 1
  for (let i = 0; i < nums.length; i++) {
    // Create an if statement that checks if the current element is equal to the majority
    if (nums[i] === majority) {
      // If it is, increment count by 1
      count++;

      // Close the if statement
    }

    // Close the for loop
  }

  // Create an if statement that checks if count is greater than the floor of the length of the array divided by 2
  if (count > Math.floor(nums.length / 2)) {
    return majority;
  }
};

// Alternate Solution
function majorityElement(nums) {
  let count = 0;
  let majority = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
    }
    if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }

  return majority;
}


// Alternative 
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[parseInt(nums.length / 2)];
};