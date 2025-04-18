class Solution {
  circularSubarraySum(arr) {
    // code here
    function kadane(ar) {
      let maxEnding = ar[0];
      let maxSoFar = ar[0];

      for (let i = 1; i < ar.length; i++) {
        maxEnding = Math.max(ar[i], maxEnding + ar[i]);
        maxSoFar = Math.max(maxSoFar, maxEnding);
      }
      return maxSoFar;
    }

    const maxNormal = kadane(arr);
    if (maxNormal < 0) return maxNormal;
    const totalSum = arr.reduce((a, b) => a + b, 0);
    const invertedArray = arr.map((num) => -num);
    const minSubArraySum = kadane(invertedArray);
    const maxCircular = totalSum + minSubArraySum;

    return Math.max(maxCircular, maxNormal);
  }
}

// Max Circular Subarray Sum

// Given an array of integers arr[] in a circular fashion. Find the maximum subarray sum that we can
// get if we assume the array to be circular.

// Examples:

// Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
// Output: 22
// Explanation: Starting from the last element of the array, i.e, 12, and moving in a circular fashion,
// we have max subarray as 12, 8, -8, 9, -9, 10, which gives maximum sum as 22.
