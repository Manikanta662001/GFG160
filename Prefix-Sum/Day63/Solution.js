class Solution {
  maxLen(arr) {
    // code here
    const map = new Map();
    let maxLength = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      const val = arr[i] === 0 ? -1 : 1;
      sum += val;
      if (sum === 0) {
        maxLength = i + 1;
      }
      if (map.has(sum)) {
        maxLength = Math.max(maxLength, i - map.get(sum));
      } else {
        map.set(sum, i);
      }
    }
    return maxLength;
  }
}
// Largest subarray of 0's and 1's

// Given an array arr of 0s and 1s. Find and return the length of the longest subarray with equal number
// of 0s and 1s.

// Examples:

// Input: arr[] = [1, 0, 1, 1, 1, 0, 0]
// Output: 6
// Explanation: arr[1...6] is the longest subarray with three 0s and three 1s.
