class Solution {
  /**
   * @param {number[]} arr
   * @return {number[][]}
   */
  findTriplets(arr) {
    // write your code here
    const n = arr.length;
    const result = [];
    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
          if (arr[i] + arr[j] + arr[k] === 0) {
            result.push([i, j, k]);
          }
        }
      }
    }
    return result;
  }
}
// Find All Triplets with Zero Sum

// Given an array arr[], find all possible triplets i, j, k in the arr[] whose sum of elements is equals to zero.
// Returned triplet should also be internally sorted i.e. i<j<k.

// Examples:

// Input: arr[] = [0, -1, 2, -3, 1]
// Output: [[0, 1, 4], [2, 3, 4]]
// Explanation: Triplets with sum 0 are:
// arr[0] + arr[1] + arr[4] = 0 + (-1) + 1 = 0
// arr[2] + arr[3] + arr[4] = 2 + (-3) + 1 = 0
