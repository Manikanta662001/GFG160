# Day52

### Approach

- Sort the array.
- Initialize two pointers: left at start, right at end.
- Iterate and count pairs:
 - If arr[left] + arr[right] < target, then all elements from left+1 to right will also form valid pairs with arr[left].
 - Count these pairs: right - left.
 - Move left one step to the right.
 - If the sum is ≥ target, move right one step to the left.

### Complexity

- Time Complexity: O(n log n),
- Space Complexity: O(1).
