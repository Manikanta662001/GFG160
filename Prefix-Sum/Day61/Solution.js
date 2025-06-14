class Solution {
  // Function to find equilibrium point in the array.
  findEquilibrium(arr) {
    // code here
    const totalSum = arr.reduce((sum, val) => sum + val, 0);
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (leftSum === totalSum - leftSum - arr[i]) {
        return i;
      }
      leftSum += arr[i];
    }
    return -1;
  }
}
// Equilibrium Point

// Given an array of integers arr[], the task is to find the first equilibrium point in the array.

// The equilibrium point in an array is an index (0-based indexing) such that the sum of all elements
// before that index is the same as the sum of elements after it. Return -1 if no such point exists.

// Examples:

// Input: arr[] = [1, 2, 0, 3]
// Output: 2
// Explanation: The sum of left of index 2 is 1 + 2 = 3 and sum on right of index 2 is 3.
