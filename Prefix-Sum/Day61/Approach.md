# Day61

### Approach

- Calculate totalSum of all elements.
- Initialize leftSum = 0.
- Loop through the array:
 - At each index i, check if
 - leftSum === totalSum - leftSum - arr[i]
 - If yes, return i.
 - Else, add arr[i] to leftSum.
- Return -1 if no such index is found.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(1).
