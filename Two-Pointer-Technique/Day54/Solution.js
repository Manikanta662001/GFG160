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
// Pair with given sum in a sorted array

// You are given an integer target and an array arr[]. You have to find number of pairs in arr[] which sums
// up to target. It is given that the elements of the arr[] are in sorted order.
// Note: pairs should have elements of distinct indexes.

// Examples :

// Input: arr[] = [-1, 1, 5, 5, 7], target = 6
// Output: 3
// Explanation: There are 3 pairs which sum up to 6 : {1, 5}, {1, 5} and {-1, 7}.
