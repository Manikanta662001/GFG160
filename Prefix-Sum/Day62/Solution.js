class Solution {
  longestSubarray(arr, k) {
    // code here
    const prefixMap = new Map();
    let maxLength = 0;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i];
      if (currentSum === k) {
        maxLength = i + 1;
      }
      if (prefixMap.has(currentSum - k)) {
        const prevIndex = prefixMap.get(currentSum - k);
        maxLength = Math.max(maxLength, i - prevIndex);
      }
      if (!prefixMap.has(currentSum)) {
        prefixMap.set(currentSum, i);
      }
    }
    return maxLength;
  }
}
// Longest Subarray with Sum K

// Given an array arr[] containing integers and an integer k, your task is to find the length of the longest
// subarray where the sum of its elements is equal to the given value k. If there is no subarray with sum equal
//  to k, return 0.

// Examples:

// Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
// Output: 6
// Explanation: Subarrays with sum = 15 are [5, 2, 7, 1], [10, 5] and [10, 5, 2, 7, 1, -10]. The length of the
// longest subarray with a sum of 15 is 6.
