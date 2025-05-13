# Day39

### Approach

- Loop through each row in the matrix.
- For each row:
 - Perform binary search (since it's sorted).
 - If the element x is found in that row → return true.
- If the loop finishes and no match is found → return false.

### Complexity

- Time Complexity: O(n * log m),
- Space Complexity: O(1).
