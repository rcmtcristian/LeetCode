// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Main Solution
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // if n is less than or equal to 2, return n
    if(n <= 2){
        return n
    }

    // prev is 1
    let prev = 1
    // current is 2
    let current = 2

    // for i from 3 to n
    for(let i = 3; i <= n; i++){
        // next is prev + current
        const next  = prev + current
        // prev is current
        prev = current
        // current is next
        current = next
    }

    // return current
    return  current 
}
// Explanation
// approach known as the Fibonacci sequence
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// Refactored Solution
function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }

  let prev: number = 1;
  let current: number = 2;

  for (let i: number = 3; i <= n; i++) {
    const next: number = prev + current;
    prev = current;
    current = next;
  }

  return current;
};

// Alternate Solution
const cache: number[] = []; 

function climbStairs(n: number): number {
    return climb(n);
};

function climb(n: number): number {
    if (n <= 3) return n;
    
    if (!cache[n])
    cache[n] = climb(n - 2) + climb(n - 1);

    return cache[n];
}


