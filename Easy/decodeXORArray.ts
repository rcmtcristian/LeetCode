// There is a hidden integer array arr that consists of n non-negative integers.

// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

// You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

// Return the original array arr. It can be proved that the answer exists and is unique.

 

// Example 1:

// Input: encoded = [1,2,3], first = 1
// Output: [1,0,2,1]
// Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]

const assert = require('assert');

// Main Solution
const decodeXORArray = {
    decode: function(encoded: number[], first: number): number[] {
        let ans = [first];

        for (let i = 0; i < encoded.length; i++) {
            ans.push(ans[i] ^ encoded[i]);
        }

        return ans;
    }
};
// Time: O(n)
// Space: O(n)

// Test Cases:
describe('test decodeXORArray', function() {
    it('test decodeXORArray.decode', function(done) {
        assert.deepEqual(decodeXORArray.decode([1,2,3], 1), [1,0,2,1]);
        assert.deepEqual(decodeXORArray.decode([6,2,7,3], 4), [4,2,0,7,4]);
        done();
    })
})

// Alternative Solution
function decode(encoded: number[], first: number): number[] {
    const temp = first;
    const res = encoded.map(curr => first ^= curr);
    res.unshift(temp);
    return res
};

// Explanation: 
// The ^ symbol is the XOR (exclusive OR) operator.

// The XOR operator is a bitwise operator that performs a bitwise exclusive OR operation on two operands. It compares the corresponding bits of the operands and returns 1 if the bits are different, and 0 if the bits are the same.

// In the context of the code, the ^ operator is used to perform the XOR operation between ans[i] and encoded[i] within the ans.push() statement. It calculates the XOR value of the current element in the encoded array with the corresponding element in the ans array and appends it to the ans array using the push() method.