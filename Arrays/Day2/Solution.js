class Solution {
    pushZerosToEnd(arr) {
        // code here
        let nonZeroIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                arr[nonZeroIndex] = arr[i];
                nonZeroIndex++;
            }
        }
        
        while(nonZeroIndex < arr.length) {
            arr[nonZeroIndex] = 0;
            nonZeroIndex++;
        }
        return arr;
    }
}

// Move All Zeroes to End

// You are given an array arr[] of non-negative integers.
// Your task is to move all the zeros in the array to the right end while maintaining the relative order
// of the non-zero elements. The operation must be performed in place, meaning you should not use extra 
// space for another array.

// Examples:

// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.