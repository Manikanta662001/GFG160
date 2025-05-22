class Solution {
  // Function to return length of longest subsequence of consecutive integers.
  longestConsecutive(arr) {
    // code here
    const set = new Set(arr);
    let maxLength = 0;
    for (let num of arr) {
      if (!set.has(num - 1)) {
        let length = 1;
        let current = num + 1;
        while (set.has(current)) {
          length++;
          current++;
        }
        maxLength = Math.max(maxLength, length);
      }
    }
    return maxLength;
  }
}
// Longest Consecutive Subsequence

// Given an array arr[] of non-negative integers. Find the length of the longest sub-sequence such that
// elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.

// Examples:

// Input: arr[] = [2, 6, 1, 9, 4, 5, 3]
// Output: 6
// Explanation: The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest
// consecutive subsquence.
