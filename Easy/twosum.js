// Passed an array and a number. The array will be in a specific order. The order doesn't actually matter, but the values in the array will be all numbers. There will be no special cases in the array. No strings or special characters. The array will always have a minimum length of 2

// We will also be passed a target number to determine if two values from the original array add up to the target value

// Return the index of both numbers if no numbers exist return false

// Main Solution
var twoSum = function(nums, target) {
    // create a hashmap
    let hashmap = {}

    // loop through the array and determine if the difference shows up in the hashmap
    for (element in nums) {
        let otherNum = target - nums[element]
        console.log(nums[element])
        // set each element in the array to its index
        if(otherNum in hashmap){
            return [+hashmap[otherNum], +element]
        }
        hashmap[nums[element]] = element
    }

    return false

};
// Explanation
// The function twoSum takes an array of numbers (nums) and a target number (target) as parameters and returns an array containing the indices of the two numbers in the nums array that add up to the target.

// Let's break down the code step by step:

// let indicesMap = {}: This initializes an empty object called indicesMap. This object will be used to store the indices of the numbers encountered in the nums array.

// The code then enters a for...in loop that iterates over each element in the nums array. The variable element represents the index of the current element being processed.

// let foundElement = target - nums[element]: This calculates the difference between the target and the current element in the nums array. The variable foundElement stores this difference.

// console.log(nums[element]): This line is for debugging purposes and prints the current element in the nums array.

// if(foundElement in indicesMap): This condition checks if the foundElement exists as a key in the indicesMap object. If it does, it means that a previously encountered number exists in the indicesMap that can be added to the current element to obtain the target sum.

// return [+indicesMap[foundElement], +element]: If the condition in step 5 is true, this line returns an array containing the indices of the two numbers that add up to the target. The + sign before indicesMap[foundElement] and element is used to convert the indices from strings to numbers.

// indicesMap[nums[element]] = element: If the condition in step 5 is false, it means that the foundElement is not present in the indicesMap. Therefore, the current element and its index are added to the indicesMap object. The current element is used as the key, and its index is the corresponding value.

// After the loop has iterated over all the elements in the nums array without finding a valid pair, the code reaches the return false statement. This means that no two numbers in the nums array add up to the target, and false is returned.

// To summarize, the code iterates through the nums array and keeps track of previously encountered numbers and their indices using the indicesMap object. It calculates the difference between the target and the current element and checks if that difference exists in the indicesMap. If a valid pair is found, the indices are returned. Otherwise, false is returned.

//Alternate Solution
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
  }

console.log(twoSum([2,7,11,15], 9), [0,1])
console.log(twoSum([3,2,4], 7), [0,2])
console.log(twoSum([3,3], 6), [0,1])