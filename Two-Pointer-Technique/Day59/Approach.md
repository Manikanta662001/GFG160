# Day59

### Approach

- Initialize two pointers: left = 0, right = arr.length - 1.
- Initialize two variables: leftMax = 0, rightMax = 0.
- Initialize total water: waterTrapped = 0.
- Loop while left < right:
- If arr[left] < arr[right]:
 - If arr[left] >= leftMax, update leftMax.
 - Else, add leftMax - arr[left] to waterTrapped, Move left++.
- Else:
 - If arr[right] >= rightMax, update rightMax.
 - Else, add rightMax - arr[right] to waterTrapped, Move right--.
- Return waterTrapped.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(1).
