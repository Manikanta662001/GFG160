class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    rotateArr(arr, d) {
        // code here
        const l = arr.length;
        d = d % l;
        function reverse(start, end) {
            while (start < end) {
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--;
            }
        }
        reverse(0, d - 1);
        reverse(d, l - 1);
        reverse(0, l - 1);
        return arr;
    }
}

// Rotate Array

// Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps,
// where d is a positive integer. Do the mentioned change in the array in place.

// Note: Consider the array as circular.

// Examples :

// Input: arr[] = [1, 2, 3, 4, 5], d = 2
// Output: [3, 4, 5, 1, 2]
// Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.