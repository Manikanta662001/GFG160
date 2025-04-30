# Day23

### Approach

- Divide the array into two halves.
- Recursively count inversions in each half.
- Count cross-inversions while merging the two halves.
- If left element > right element → all remaining elements on the left form inversions.
- Merge and keep counting.

### Complexity

- Time Complexity: O(n log n),
- Space Complexity: O(n).
