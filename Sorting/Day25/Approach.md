# Day25

### Approach

- Before Merge: Add all intervals that end before the newInterval starts.
- Merge Phase: Merge all intervals that overlap with the newInterval.
- After Merge: Add the remaining intervals.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(n).
