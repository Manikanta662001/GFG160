class Solution {
  twoSum(arr, target) {
    // code here
    const seen = new Set();
    for (let num of arr) {
      const complement = target - num;
      if (seen.has(complement)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }
}
// Count pairs with given sum

// Given an array arr[] and an integer target. You have to find numbers of pairs in array arr[] which sums
// up to given target.

// Examples:

// Input: arr[] = [1, 5, 7, -1, 5], target = 6
// Output: 3
// Explanation: Pairs with sum 6 are (1, 5), (7, -1) and (1, 5).
