class Solution {
  // Function to return a list of integers denoting spiral traversal of matrix.
  spirallyTraverse(mat) {
    // code here
    let result = [];
    let top = 0,
      bottom = mat.length - 1;
    let left = 0,
      right = mat[0].length - 1;

    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) {
        result.push(mat[top][i]);
      }
      top++;
      for (let i = top; i <= bottom; i++) {
        result.push(mat[i][right]);
      }
      right--;
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(mat[bottom][i]);
        }
        bottom--;
      }
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(mat[i][left]);
        }
        left++;
      }
    }
    return result;
  }
}
// Spirally traversing a matrix

// You are given a rectangular matrix mat[][] of size n x m, and your task is to return an array while
// traversing the matrix in spiral form.

// Examples:

// Input: mat[][] = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
