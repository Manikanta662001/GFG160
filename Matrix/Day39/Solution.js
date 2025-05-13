class Solution {
  // Function to search a given number in row-column sorted matrix.
  searchRowMatrix(mat, x) {
    // code here
    const n = mat.length;
    const m = mat[0].length;
    for (let i = 0; i < n; i++) {
      let low = 0,
        high = m - 1;
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (mat[i][mid] === x) return true;
        else if (mat[i][mid] < x) low = mid + 1;
        else high = mid - 1;
      }
    }
    return false;
  }
}
// Search in a row-wise sorted matrix

// Given a row-wise sorted 2D matrix mat[][] of size n x m and an integer x, find whether element x is present
// in the matrix.
// Note: In a row-wise sorted matrix, each row is sorted in itself, i.e. for any i, j within bounds,
// mat[i][j] <= mat[i][j+1].

// Examples :

// Input: mat[][] = [[3, 4, 9],[2, 5, 6],[9, 25, 27]], x = 9
// Output: true
// Explanation: 9 is present in the matrix, so the output is true.
