class Solution {
  // Function to count the number of possible triangles.
  countTriangles(arr) {
    // code here
    const n = arr.length;
    arr.sort((a, b) => a - b);
    let count = 0;
    for (let k = n - 1; k >= 2; k--) {
      let i = 0,
        j = k - 1;
      while (i < j) {
        if (arr[i] + arr[j] > arr[k]) {
          count += j - i;
          j--;
        } else {
          i++;
        }
      }
    }
    return count;
  }
}
// Count the number of possible triangles

// Given an integer array arr[]. Find the number of triangles that can be formed with three different array
// elements as lengths of three sides of the triangle.

// A triangle with three given sides is only possible if sum of any two sides is always greater than the
// third side.

// Examples:

// Input: arr[] = [4, 6, 3, 7]
// Output: 3
// Explanation: There are three triangles possible [3, 4, 6], [4, 6, 7] and [3, 6, 7]. Note that [3, 4, 7] is
//  not a possible triangle.
