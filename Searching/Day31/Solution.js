class Solution {
  peakElement(arr) {
    // Code here
    let low = 0,
      high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let left = mid === 0 ? -Infinity : arr[mid - 1];
      let right = mid === arr.length - 1 ? -Infinity : arr[mid + 1];

      if (arr[mid] > left && arr[mid] > right) {
        return mid;
      } else if (left > arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  }
}
// Peak element

// Given an array arr[] where no two adjacent elements are same, find the index of a peak element.
// An element is considered to be a peak if it is greater than its adjacent elements (if they exist).
// If there are multiple peak elements, return index of any one of them. The output will be "true" if the index
// returned by your function is correct; otherwise, it will be "false".

// Examples :

// Input: arr = [1, 2, 4, 5, 7, 8, 3]
// Output: true
// Explanation: arr[5] = 8 is a peak element because arr[4] < arr[5] > arr[6].
