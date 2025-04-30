# Day24

### Approach

- Sort all intervals by their starting time.
- Initialize the first interval in a merged array.
- For each interval:
- If it overlaps with the last merged interval, merge it.
- Otherwise, push it as a new interval.

### Complexity

- Time Complexity: O(n log n),
- Space Complexity: O(n).
