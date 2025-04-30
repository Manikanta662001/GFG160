class Solution {
  // Function to count inversions in the array.
  inversionCount(arr) {
    function mergeSort(arr) {
      if (arr.length <= 1) return { sorted: arr, count: 0 };

      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));

      const merged = [];
      let i = 0,
        j = 0,
        invCount = left.count + right.count;
      while (i < left.sorted.length && j < right.sorted.length) {
        if (left.sorted[i] <= right.sorted[j]) {
          merged.push(left.sorted[i]);
          i++;
        } else {
          merged.push(right.sorted[j]);
          invCount += left.sorted.length - i;
          j++;
        }
      }

      while (i < left.sorted.length) merged.push(left.sorted[i++]);
      while (j < right.sorted.length) merged.push(right.sorted[j++]);
      return { sorted: merged, count: invCount };
    }
    return mergeSort(arr).count;
  }
}
// Count Inversions

// Given an array of integers arr[]. Find the Inversion Count in the array.
// Two elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.

// Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted.
// If the array is already sorted then the inversion count is 0.
// If an array is sorted in the reverse order then the inversion count is the maximum.

// Examples:

// Input: arr[] = [2, 4, 1, 3, 5]
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).
