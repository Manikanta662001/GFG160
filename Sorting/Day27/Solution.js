class Solution {
  mergeArrays(a, b) {
    // code here
    let i = a.length - 1;
    let j = 0;
    while (i >= 0 && j < b.length) {
      if (a[i] < b[j]) {
        i--;
      } else {
        [a[i], b[j]] = [b[j], a[i]];
        i--;
        j++;
      }
    }
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
  }
}
// Merge Without Extra Space

// Given two sorted arrays a[] and b[] of size n and m respectively, the task is to merge them in sorted order
// without using any extra space. Modify a[] so that it contains the first n elements and modify b[]
// so that it contains the last m elements.

// Examples:

// Input: a[] = [2, 4, 7, 10], b[] = [2, 3]
// Output:
// 2 2 3 4
// 7 10
// Explanation: After merging the two non-decreasing arrays, we get, 2 2 3 4 7 10
