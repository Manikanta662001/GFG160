# Day63

### Approach

- Replace all 0s with -1 in the array.
- Use a prefix sum to keep a running total.
- Use a map to store the first index of each unique prefix sum.
- If the same sum appears again, the subarray between those indices has a net sum of 0.
- Update the maximum length whenever such a subarray is found.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(n).
