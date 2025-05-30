class Solution {
  sumClosest(arr, target) {
    // write code here
    if (arr.length < 2) return [];
    arr.sort((a, b) => a - b);
    let left = 0,
      right = arr.length - 1;
    let minDiff = Infinity;
    let bestPair = [];
    while (left < right) {
      const sum = arr[left] + arr[right];
      const diff = Math.abs(sum - target);
      if (
        diff < minDiff ||
        (diff === minDiff &&
          Math.abs(arr[right] - arr[left]) >
            Math.abs(bestPair[1] - bestPair[0]))
      ) {
        minDiff = diff;
        bestPair = [arr[left], arr[right]];
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return bestPair;
  }
}
// Sum Pair closest to target

// Given an array arr[] and a number target, find a pair of elements (a, b) in arr[], where a<=b whose sum is
// closest to target.
// Note: Return the pair in sorted order and if there are multiple such pairs return the pair with maximum
// absolute difference. If no such pair exists return an empty array.

// Examples:

// Input: arr[] = [10, 30, 20, 5], target = 25
// Output: [5, 20]
// Explanation: As 5 + 20 = 25 is closest to 25.
