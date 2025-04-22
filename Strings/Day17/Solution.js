class Solution {
  nonRepeatingChar(s) {
    // code here
    const freq = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      freq[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < s.length; i++) {
      if (freq[s.charCodeAt(i) - 97] === 1) {
        return s[i];
      }
    }
    return "$";
  }
}

// Non Repeating Character

// Given a string s consisting of lowercase English Letters. Return the first non-repeating character in s.
// If there is no non-repeating character, return '$'.
// Note: When you return '$' driver code will output -1.

// Examples:

// Input: s = "geeksforgeeks"
// Output: 'f'
// Explanation: In the given string, 'f' is the first character in the string which does not repeat.
