class Solution {
  /**
   * @param {number[][]} mat
   */
  setMatrixZeroes(mat) {
    // your code here
    const n = mat.length;
    const m = mat[0].length;
    let firstRowHasZeros = false;
    let firstColHasZeros = false;
    for (let i = 0; i < m; i++) {
      if (mat[0][i] === 0) firstRowHasZeros = true;
    }
    for (let j = 0; j < n; j++) {
      if (mat[j][0] === 0) firstColHasZeros = true;
    }
    for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
        if (mat[i][j] === 0) {
          mat[i][0] = 0;
          mat[0][j] = 0;
        }
      }
    }
    for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
        if (mat[i][0] === 0 || mat[0][j] === 0) {
          mat[i][j] = 0;
        }
      }
    }
    if (firstRowHasZeros) {
      for (let j = 0; j < m; j++) {
        mat[0][j] = 0;
      }
    }
    if (firstColHasZeros) {
      for (let i = 0; i < n; i++) {
        mat[i][0] = 0;
      }
    }
    return mat;
  }
}
// Set Matrix Zeroes

// You are given a 2D matrix mat[][] of size n×m. The task is to modify the matrix such that if mat[i][j] is 0,
// all the elements in the i-th row and j-th column are set to 0 and do it in constant space complexity.

// Examples:

// Input: mat[][] = [[1, -1, 1],
//                 [-1, 0, 1],
//                 [1, -1, 1]]
// Output: [[1, 0, 1],
//         [0, 0, 0],
//         [1, 0, 1]]
// Explanation: mat[1][1] = 0, so all elements in row 1 and column 1 are updated to zeroes.
