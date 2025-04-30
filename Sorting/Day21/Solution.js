class Solution {
    sort012(arr) {
        // your code here
       let low = 0, mid = 0, high = arr.length - 1;
       while(mid <= high) {
           if(arr[mid] === 0) {
               [arr[low], arr[mid]] = [arr[mid], arr[low]];
               low++;
               mid++;
           } else if(arr[mid] === 1) {
               mid++;
           } else {
               [arr[mid], arr[high]] = [arr[high], arr[mid]];
               high--;
           }
       }
        return arr;
    }
}
// Sort 0s, 1s and 2s

// Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.

// You need to solve this problem without utilizing the built-in sort function.

// Examples:

// Input: arr[] = [0, 1, 2, 0, 1, 2]
// Output: [0, 0, 1, 1, 2, 2]
// Explanation: 0s 1s and 2s are segregated into ascending order.
