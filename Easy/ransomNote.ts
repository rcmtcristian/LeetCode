// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

// Main Solution
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let charCount = {};

  for (let i = 0; i < magazine.length; i++) {
    let char = magazine[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let j = 0; j < ransomNote.length; j++) {
    let char = ransomNote[j];
    if (!charCount[char] || charCount[char] === 0) {
      return false;
    }
    charCount[char]--;
  }

  return true;
};

// Refactored solution
function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomNoteFreq: number[] = new Array(26).fill(0);
  const magazineFreq: number[] = new Array(26).fill(0);

  // Count the frequency of each letter in ransomNote
  for (const char of ransomNote) {
    const index = char.charCodeAt(0) - 97;
    ransomNoteFreq[index]++;
  }

  // Count the frequency of each letter in magazine
  for (const char of magazine) {
    const index = char.charCodeAt(0) - 97;
    magazineFreq[index]++;
  }

  // Check if the frequency of each letter in ransomNote is less than or equal to
  // the frequency of the same letter in magazine
  for (let i = 0; i < 26; i++) {
    if (ransomNoteFreq[i] > magazineFreq[i]) {
      return false;
    }
  }

  return true;
}

// Explanation
// 1 - We create two arrays, ransomNoteFreq and magazineFreq, each of size 26 to represent the frequency of each letter in the alphabet.

// 2 - We iterate through ransomNote and increment the frequency of each letter in ransomNote in ransomNoteFreq.

// 3 - We iterate through magazine and increment the frequency of each letter in magazine in magazineFreq.

// 4 - We iterate through ransomNoteFreq and check if the frequency of each letter in ransomNote is less than or equal to the frequency of the same letter in magazine. If it is not, we return false.
