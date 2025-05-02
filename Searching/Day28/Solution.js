class Solution {
  // Function to count the occurrences of x in the array.
  countFreq(arr, target) {
    // your code here
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        count += 1;
      }
    }
    return count;
  }
}
// Number of occurrence

// Given a sorted array, arr[] and a number target, you need to find the number of occurrences of target in arr[].

// Examples :

// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 2
// Output: 4
// Explanation: target = 2 occurs 4 times in the given array so the output is 4.
