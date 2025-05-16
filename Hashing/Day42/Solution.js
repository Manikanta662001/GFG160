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
// Two Sum - Pair with Given Sum

// Given an array arr[] of positive integers and another integer target. Determine if there exist two
// distinct indices such that the sum of their elements is equal to the target.

// Examples:

// Input: arr[] = [1, 4, 45, 6, 10, 8], target = 16
// Output: true
// Explanation: arr[3] + arr[4] = 6 + 10 = 16.
