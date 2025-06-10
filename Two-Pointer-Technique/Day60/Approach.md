# Day60

### Approach

- Initialize two pointers: left = 0, right = arr.length - 1.
- Loop while left < right.
- Calculate area = (right - left) * min(arr[left], arr[right]).
- Update maxArea if area is greater.
- Move the pointer with the smaller height inward.
- Return maxArea at the end.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(1).
