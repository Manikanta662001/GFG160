class Solution {
  kthMissing(arr, k) {
    // code here
    let low = 0,
      high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let missing = arr[mid] - (mid + 1);
      if (missing < k) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return low + k;
  }
}
// Kth Missing Positive Number in a Sorted Array

// Given a sorted array of distinct positive integers arr[], we need to find the kth positive number that
// is missing from arr[].

// Examples :

// Input: arr[] = [2, 3, 4, 7, 11], k = 5
// Output: 9
// Explanation: Missing are 1, 5, 6, 8, 9, 10… and 5th missing number is 9.
