class Solution {
  // Function to Merge overlapping arr.
  mergeOverlap(arr) {
    // your code here
    if (arr.length === 0) return [];
    arr.sort((a, b) => a[0] - b[0]);
    const merged = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      const last = merged[merged.length - 1];
      const current = arr[i];
      if (current[0] <= last[1]) {
        last[1] = Math.max(last[1], current[1]);
      } else {
        merged.push(current);
      }
    }
    return merged;
  }
}
// Overlapping Intervals

// Given an array of Intervals arr[][], where arr[i] = [starti, endi]. The task is to merge all of the
// overlapping Intervals.

// Examples:

// Input: arr[][] = [[1,3],[2,4],[6,8],[9,10]]
// Output: [[1,4], [6,8], [9,10]]
// Explanation: In the given intervals we have only two overlapping intervals here,
// [1,3] and [2,4] which on merging will become [1,4]. Therefore we will return [[1,4], [6,8], [9,10]].
