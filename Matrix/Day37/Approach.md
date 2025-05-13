# Day37

### Approach

- Transpose the matrix:
 - Convert rows to columns.
 - Swap matrix[i][j] with matrix[j][i] for all i < j.
- Reverse each column:
 - For each column, swap the top and bottom elements, then move inward.

### Complexity

- Time Complexity: O(n²),
- Space Complexity: O(1).
