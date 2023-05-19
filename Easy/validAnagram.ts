// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Main Solution

 var isAnagram = function(s, t) {
    const reverse = (word) => word.split('').sort((a, b) => a.localeCompare(b)).join('')
return  reverse(t) === reverse(s) ? true : false
};


// Refactored Solution
type Anagram = (s: string, t: string) => boolean
const isAnagram: Anagram = function(s, t) {
    const reverse = (word: string) => word.split('').sort((a, b) => a.localeCompare(b)).join('')
return  reverse(t) === reverse(s) ? true : false
};


// Alternate Solutions
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let counterS: {
        [key: string]: number
    } = {};

    let counterT: {
        [key: string]: number
    } = {};

    for (let i = 0; i < s.length; i++) {
        if (counterS[s[i]] == null) counterS[s[i]] = 0;
        counterS[s[i]]++;

        if (counterT[t[i]] == null) counterT[t[i]] = 0;
        counterT[t[i]]++;
    }

    let keyS = Object.keys(counterS);
    let keyT = Object.keys(counterT);

    if (keyS.length !== keyT.length) return false;

    for (let i = 0; i < keyS.length; i++) {
        let key = keyS[i];
        if (counterS[key] !== counterT[key]) {
            return false;
        }
    }
    return true;
};