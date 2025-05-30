class Solution {
  missingNumber(arr) {
    // your code here
    const set = new Set(arr);
    let i = 1;
    while (true) {
      if (!set.has(i)) return i;
      i++;
    }
  }
}

// Smallest Positive Missing

// You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.

// Note: Positive number starts from 1. The array can have negative integers too.

// Examples:

// Input: arr[] = [2, -3, 4, 1, 1, 7]
// Output: 3
// Explanation: Smallest positive missing number is 3.
