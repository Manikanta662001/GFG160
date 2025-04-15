class Solution {
  maxSubarraySum(arr) {
    // Your code here
    let maxSoFar = arr[0];
    let maxEnding = arr[0];

    for (let i = 1; i < arr.length; i++) {
      maxEnding = Math.max(arr[i], maxEnding + arr[i]);
      maxSoFar = Math.max(maxSoFar, maxEnding);
    }
    return maxSoFar;
  }
}


// Kadane's Algorithm

// Given an integer array arr[]. You need to find the maximum sum of a subarray.

// Examples:

// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.