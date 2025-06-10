class Solution {
  productExceptSelf(arr) {
    // code here
    const n = arr.length;
    const res = Array(n).fill(1);
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
      res[i] = leftProduct;
      leftProduct *= arr[i];
    }
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
      res[i] *= rightProduct;
      rightProduct *= arr[i];
    }
    return res;
  }
}
// Product array puzzle

// Given an array, arr[] construct a product array, res[] where each element in res[i] is the product of all
// elements in arr[] except arr[i]. Return this resultant array, res[].
// Note: Each element is res[] lies inside the 32-bit integer range.

// Examples:

// Input: arr[] = [10, 3, 5, 6, 2]
// Output: [180, 600, 360, 300, 900]
// Explanation: For i=0, res[i] = 3 * 5 * 6 * 2 is 180.
// For i = 1, res[i] = 10 * 5 * 6 * 2 is 600.
// For i = 2, res[i] = 10 * 3 * 6 * 2 is 360.
// For i = 3, res[i] = 10 * 3 * 5 * 2 is 300.
// For i = 4, res[i] = 10 * 3 * 5 * 6 is 900.
