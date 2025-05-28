# Day53

### Approach

- Sort the array.
- Use two pointers left and right to find closest sum to target.
- Track:
 - Closest difference (minDiff).
 - Current best pair (bestPair).
 - When same diff, choose pair with maximum absolute difference.

### Complexity

- Time Complexity: O(n log n),
- Space Complexity: O(1).
