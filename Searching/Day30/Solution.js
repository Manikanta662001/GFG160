class Solution {
  search(arr, key) {
    // code here
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === key) {
        index = i;
        break;
      }
    }
    return index;
  }
}
// Search in Rotated Sorted Array

// Given a sorted and rotated array arr[] of distinct elements, the task is to find the index of a target key.
// Return -1 if the key is not found.

// Examples :

// Input: arr[] = [5, 6, 7, 8, 9, 10, 1, 2, 3], key = 3
// Output: 8
// Explanation: 3 is found at index 8.
