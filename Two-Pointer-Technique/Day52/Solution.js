class Solution {
  countPairs(arr, target) {
    // write your code here
    arr.sort((a, b) => a - b);
    let count = 0;
    let left = 0,
      right = arr.length - 1;
    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
    return count;
  }
}
// Count Pairs whose sum is less than target

// Given an array arr[] and an integer target. You have to find the number of pairs in the array whose sum is
// strictly less than the target.

// Examples:

// Input: arr[] = [7, 2, 5, 3], target = 8
// Output: 2
// Explanation: There are 2 pairs with sum less than 8: (2, 5) and (2, 3).
