class Solution {
  countSubarrays(arr, k) {
    // code here
    const prefixSumMap = new Map();
    let count = 0;
    let currentSum = 0;
    prefixSumMap.set(0, 1);
    for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i];
      if (prefixSumMap.has(currentSum - k)) {
        count += prefixSumMap.get(currentSum - k);
      }
      prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);
    }
    return count;
  }
}
// Subarrays with sum K

// Given an unsorted array of integers, find the number of subarrays having sum exactly equal to a given number k.

// Examples:

// Input: arr = [10, 2, -2, -20, 10], k = -10
// Output: 3
// Explaination: Subarrays: arr[0...3], arr[1...4], arr[3...4] have sum exactly equal to -10.
