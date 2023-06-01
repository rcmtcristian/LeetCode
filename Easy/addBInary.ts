// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Main Solution;
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = "";
  let counter = 0;
  let L1 = a.length - 1;
  let L2 = b.length - 1;


    while (L1 >= 0 || L2 >= 0 || counter > 0) {
    let sum = counter;

    if (L1 >= 0) {
      sum += parseInt(a[L1]);
      L1--;
    }
    if (L2 >= 0) {
      sum += parseInt(b[L2]);
      L2--;
    }

    result = (sum % 2) + result;
    counter = Math.floor(sum / 2);
  }

  return result;
};

// Refactor 1:
function addBinary(a: string, b: string): string {
 let result = "";
  let counter = 0;
  let L1 = a.length - 1;
  let L2 = b.length - 1;


    while (L1 >= 0 || L2 >= 0 || counter > 0) {
    let sum = counter;

    if (L1 >= 0) {
      sum += parseInt(a[L1]);
      L1--;
    }
    if (L2 >= 0) {
      sum += parseInt(b[L2]);
      L2--;
    }

    result = (sum % 2) + result;
    counter = Math.floor(sum / 2);
  }

  return result;
};

// Alternate Solution:
function addBinary(a: string, b: string): string {
  let x = BigInt('0b' + a);
  let y = BigInt('0b' + b);
  let z = (x + y).toString(2);
  return z;
};

// Explanation
// 1 - The function addBinary takes in two binary strings, a and b, as its parameters.

// 2 - The binary strings a and b are converted to BigInt using the BigInt constructor and prefixing them with '0b' to indicate a binary number.

// 3 -The addition x + y is performed using BigInt arithmetic.
// The resulting BigInt value is converted back to a binary string using the toString(2) method with a radix of 2.

// 4 - Finally, the function returns the resulting binary string.

// Note:
// The logic behind prefixing '0b' to the binary strings when using BigInt is to indicate that the provided string represents a binary number.

// In JavaScript and TypeScript, the BigInt constructor can accept strings representing numbers in various bases, including binary. By prefixing the string with '0b', you are explicitly telling the BigInt constructor to interpret the string as a binary number.

// For example, when you write BigInt('0b' + a), it creates a BigInt value by parsing the string '0b' + a as a binary number.

// # Let's break down the steps involved:

// 1 - The binary string a is concatenated with '0b' using the + operator. This creates a new string that starts with '0b' followed by the binary digits of a. For example, if a = '1010', then '0b' + a would result in the string '0b1010'.

// 2 - The resulting string '0b1010' is passed as an argument to the BigInt constructor. The BigInt constructor recognizes the prefix '0b' as indicating a binary number and interprets the remaining part of the string as binary digits.

// 3 - The BigInt constructor converts the binary string '0b1010' to a BigInt value of 10.

// In summary, prefixing '0b' to a binary string when working with BigInt is a way to indicate that the string should be interpreted as a binary number during conversion and arithmetic operations.