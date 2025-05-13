class Solution {
  // Function to find minimum number of pages.
  findPages(arr, k) {
    // your code here
    if (k > arr.length) return -1;

    function isValid(maxPages) {
      let students = 1;
      let currentSum = 0;
      for (let pages of arr) {
        if (currentSum + pages > maxPages) {
          students += 1;
          currentSum = pages;
        } else {
          currentSum += pages;
        }
      }
      return students <= k;
    }
    let low = Math.max(...arr);
    let high = arr.reduce((a, b) => a + b, 0);
    let result = -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (isValid(mid)) {
        result = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return result;
  }
}
// Allocate Minimum Pages

// You are given an array arr[] of integers, where each element arr[i] represents the number of pages in the
// ith book. You also have an integer k representing the number of students. The task is to allocate books to
// each student such that:

// Each student receives atleast one book.
// Each student is assigned a contiguous sequence of books.
// No book is assigned to more than one student.
// The objective is to minimize the maximum number of pages assigned to any student. In other words, out of
// all possible allocations, find the arrangement where the student who receives the most pages still has the
//  smallest possible maximum.

// Note: Return -1 if a valid assignment is not possible, and allotment should be in contiguous order
// (see the explanation for better understanding).

// Examples:

// Input: arr[] = [12, 34, 67, 90], k = 2
// Output: 113
// Explanation: Allocation can be done in following ways:
// [12] and [34, 67, 90] Maximum Pages = 191
// [12, 34] and [67, 90] Maximum Pages = 157
// [12, 34, 67] and [90] Maximum Pages = 113.
// Therefore, the minimum of these cases is 113, which is selected as the output.
