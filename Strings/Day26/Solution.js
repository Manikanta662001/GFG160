class Solution {
  // Function to find the minimum number of removals required.
  minRemoval(intervals) {
    // your code here
    if (intervals.length === 0) return 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let prevEnd = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
      const [start, end] = intervals[i];

      if (start < prevEnd) {
        count++;
      } else {
        prevEnd = end;
      }
    }
    return count;
  }
}
// Non-overlapping Intervals

// Given a 2D array intervals[][] of representing intervals where intervals [i] = [starti, endi ].
// Return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Examples:

// Input: intervals[][] = [[1, 2], [2, 3], [3, 4], [1, 3]]
// Output: 1
// Explanation: [1, 3] can be removed and the rest of the intervals are non-overlapping.
