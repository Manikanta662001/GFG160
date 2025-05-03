class Solution {
  // Function to find the minimum element in a sorted and rotated array.
  findMin(arr) {
    // your code here
    arr.sort((a, b) => a - b);
    return arr[0];
  }
}
// Sorted and Rotated Minimum

// A sorted array of distinct elements arr[] is rotated at some unknown point, the task is to find the minimum element in it.

// Examples:

// Input: arr[] = [5, 6, 1, 2, 3, 4]
// Output: 1
// Explanation: 1 is the minimum element in the array.
