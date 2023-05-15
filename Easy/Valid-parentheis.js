// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Main Solution
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s, stack = []) => {
    const brackets = new Map([['(', ')'], ['{', '}'], ['[', ']']]);

    for (const bracket of s.split('')) {
        if (brackets.has(bracket)) {
            stack.push(brackets.get(bracket));
        } else {
            if (!stack.length || stack.pop() !== bracket) {
                return false;
            }
        }
    }

    return (stack.length === 0);
};

// Explanation
/**
 * @param {string} s
 * @return {boolean}
 */


// This code checks if the input string has valid brackets. It returns true if all the brackets in the string are valid, and false if any of the brackets in the string are invalid. The code uses a stack to keep track of the brackets in the string. A stack is a data structure that stores data in a last-in-first-out (LIFO) manner. In other words, the last item pushed onto the stack is the first item popped off the stack. This code uses a stack to keep track of the brackets in the string. When the code encounters an opening bracket, it pushes the corresponding closing bracket onto the stack. When the code encounters a closing bracket, it pops the top item off the stack and compares it to the closing bracket. If the two brackets are not equal, the string is not valid. If the two brackets are equal, the code continues processing the string. If the string is valid, the code returns true. If the string is not valid, the code returns false.



var isValid = (s, stack = []) => {
  // {
   /* This line of code creates a new Map object called `brackets` with three key-value pairs. Each
   key-value pair represents an opening bracket and its corresponding closing bracket. The keys are
   the opening brackets '(', '{', and '[', and the values are the corresponding closing brackets
   ')', '}', and ']'. This Map object is used later in the code to check if a given character is an
   opening bracket or a closing bracket, and to find the corresponding closing bracket for a given
   opening bracket. */
    const brackets = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
// }

// {
   /* This code is iterating over each character in the input string `s` after splitting it into an
   array of characters using the `split()` method. For each character, it checks if it is an opening
   bracket by using the `has()` method of the `brackets` Map object. If it is an opening bracket, it
   pushes the corresponding closing bracket onto the `stack` array using the `push()` method and
   continues to the next character. If it is not an opening bracket, it checks if the `stack` array
   is empty or if the top item in the `stack` array (which should be the corresponding closing
   bracket for the last opening bracket encountered) is not equal to the current character. If
   either of these conditions is true, it means that the string is not valid and the function
   returns `false`. If the current character is a valid closing bracket and matches the last opening
   bracket encountered, the function continues to the next character. Finally, after iterating over
   all the characters in the input string, the function checks if the `stack` array is empty. If it
   is empty, it means that all opening brackets have been matched with their corresponding closing
   brackets, and the function returns `true */
    for (const bracket of s.split('')) {
        if (brackets.has(bracket)) {
            stack.push(brackets.get(bracket));
        } else {
            if (!stack.length || stack.pop() !== bracket) {
                return false;
            }
        }
    }
  // }

    return (stack.length === 0);
};

// Alternative Solution

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    let call = []
    for (i=0; i<s.length; i++){
        if(s[i] == '{'){
            call.push('}')
        }else if(s[i] == '['){
            call.push(']')
        }else if(s[i] == '('){
            call.push(')')
        }else if(call.pop() !== s[i]){
            return false
        }
    }
    return !call.length
};