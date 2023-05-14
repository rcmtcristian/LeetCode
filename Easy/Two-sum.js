// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


// Main Solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length-1; i++){
        const currNum = nums[i];
        
        for(let j = i+1; j< nums.length; j++) {
            const secondNum = nums[j]
            
            
            if(currNum + secondNum === target ){
                return [i,j]
            }
        }
    }

};

// Recursive Solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indicesMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (indicesMap.has(complement)) {
            return [indicesMap.get(complement), i];
        }
        
        indicesMap.set(nums[i], i);
    }
    
    return null;
}

// Alternate Solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
}

// Explanation 
// We initialize a Map called indicesMap to keep track of the indices of each element in the array.
// We iterate through the array nums and for each element nums[i]:
// We compute the complement complement = target - nums[i].
// We check if the indicesMap already has the complement as a key. If it does, we return the indices of the two elements that add up to the target.
// Otherwise, we add nums[i] to indicesMap with its index as the value.
// If we have iterated through the entire array without finding a solution, we return null.
// The time complexity of this solution is O(n) because we only iterate through the array once, and each lookup in the hash table takes constant time on average.