class Solution {
  longestUniqueSubstr(s) {
    // code here
    let start = 0;
    let maxLength = 0;
    const charSet = new Set();
    for (let end = 0; end < s.length; end++) {
      while (charSet.has(s[end])) {
        charSet.delete(s[start]);
        start++;
      }
      charSet.add(s[end]);
      maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
  }
}
// Longest substring with distinct characters

// Given a string s, find the length of the longest substring with all distinct characters.

// Examples:

// Input: s = "geeksforgeeks"
// Output: 7
// Explanation: "eksforg" is the longest substring with all distinct characters.
