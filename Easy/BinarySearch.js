// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Main Solution
var search = function(nums, target) {
    let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
};

// Alternate Solution
const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // ! getting out mid val
        if (nums[mid] === target) { // ! if mid val is equal to target we will return the mid 
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1; /// ! if mid val is less than target we will move the left pointer to mid+1
        } else {
            left = mid + 1; // ! if mid val is greater than target we will move the right pointer mid-1
        }
    }
    //! if we cant find the target we will return -1
    return -1;
};