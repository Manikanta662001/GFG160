class Solution {
  maxProduct(arr) {
    // code here
    let maxProduct = arr[0];
    let maxEnding = arr[0];
    let minEnding = arr[0];
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      if (current < 0) {
        [maxEnding, minEnding] = [minEnding, maxEnding];
      }
      maxEnding = Math.max(current, maxEnding * current);
      minEnding = Math.min(current, minEnding * current);

      maxProduct = Math.max(maxProduct, maxEnding);
    }
    return maxProduct;
  }
}

// Maximum Product Subarray

// Given an array arr[] that contains positive and negative integers (may contain 0 as well).
// Find the maximum product that we can get in a subarray of arr[].

// Note: It is guaranteed that the output fits in a 32-bit integer.

// Examples

// Input: arr[] = [-2, 6, -3, -10, 0, 2]
// Output: 180
// Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180.
