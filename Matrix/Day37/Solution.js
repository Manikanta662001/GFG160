class Solution {
  // Function to rotate matrix anticlockwise by 90 degrees.
  rotateby90(mat) {
    // code here
    const n = mat.length;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
      }
    }
    for (let col = 0; col < n; col++) {
      let top = 0,
        bottom = n - 1;
      while (top < bottom) {
        [mat[top][col], mat[bottom][col]] = [mat[bottom][col], mat[top][col]];
        top++;
        bottom--;
      }
    }
    return mat;
  }
}
// Rotate by 90 degree

// Given a square matrix mat[][] of size n x n. The task is to rotate it by 90 degrees in an anti-clockwise
// direction without using any extra space.

// Examples:

// Input: mat[][] = [[1, 2, 3],
//                 [4, 5, 6]
//                 [7, 8, 9]]
// Output: Rotated Matrix:
// [3, 6, 9]
// [2, 5, 8]
// [1, 4, 7]
