class Solution {
  search(pat, txt) {
    // your code here
    const indexes = [];
    const patLength = pat.length;
    const txtLength = txt.length;
    for (let i = 0; i <= txtLength - patLength; i++) {
      if (txt.substring(i, i + patLength) === pat) {
        indexes.push(i);
      }
    }
    return indexes;
  }
}

// Search Pattern (KMP-Algorithm)

// Given two strings, one is a text string txt and the other is a pattern string pat.
// The task is to print the indexes of all the occurrences of the pattern string in the text string.
// Use 0-based indexing while returning the indices.
// Note: Return an empty list in case of no occurrences of pattern.

// Examples :

// Input: txt = "abcab", pat = "ab"
// Output: [0, 3]
// Explanation: The string "ab" occurs twice in txt, one starts at index 0 and the other at index 3.
