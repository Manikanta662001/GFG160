# Day54

### Approach

- Initialize two pointers: left = 0, right = n - 1.
- While left < right:
 - Calculate sum = arr[left] + arr[right].
 - If sum < target, increment left.
 - If sum > target, decrement right.
 - If sum === target: Count duplicate values from both left and right.
 - If arr[left] === arr[right], calculate combinations: C(n, 2) = n * (n - 1) / 2.
 - Else, multiply counts of left and right duplicates.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(1).
