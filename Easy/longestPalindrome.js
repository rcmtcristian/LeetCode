// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

// Main Solution

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // Create a frequency counter object
    let frequencyOf = {}

    // Loop through the string and fill up the frequency counter
    for(let char of s) {
      if(frequencyOf[char]){
        frequencyOf[char]++
      } else {
        frequencyOf[char] = 1
      }
    }

    // Keep track of the length of the palindrome
    let length = 0

    // Keep track of whether we have seen an odd frequency
    let oddFrequency = false

    // Loop through the frequency counter object
    for(let key in frequencyOf){
      // If the frequency is even, add it to the length
      if(frequencyOf[key] % 2 === 0){
        length += frequencyOf[key]
      } else {
        // If the frequency is odd, subtract one and set oddFrequency to true
        length += frequencyOf[key] - 1
        oddFrequency = true
      }
    }

    // If there were any odd frequencies, add one to the length
    if( oddFrequency){
      length++
    }

    // Return the length
    return length
};





// Alternative Solution

var longestPalindrome = function(s) {
    if(s.length === 1) {
        return 1
    }
    let count = 0
    const set = new Set()
    for(char of s) {
        if(set.has(char)) {
            count++
            set.delete(char)
        } else {
            set.add(char)
        }
    }
    return (count << 1) + (set.size > 0 ? 1 : 0)
};