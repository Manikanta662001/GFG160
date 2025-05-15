# Day41

### Approach

- Check if the first row and first column have any zeros.
- Use the first row and column as markers
 - For each cell mat[i][j] == 0, set mat[i][0] = 0 and mat[0][j] = 0.
- Iterate through the matrix again excluding first row and column
 - If either mat[i][0] == 0 or mat[0][j] == 0, set mat[i][j] = 0.
- If First row and column has zeroes then make that first column, row as zeroes.

### Complexity

- Time Complexity: O(n * m),
- Space Complexity: O(1).
