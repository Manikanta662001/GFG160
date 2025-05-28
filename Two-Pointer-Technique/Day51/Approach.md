# Day51

### Approach

- Fix the first element using a loop.
- For the remaining part of the array (after the current index), use two pointers to find pairs that sum to (target - arr[i]).
- Handle duplicates carefully to avoid overcounting.

### Complexity

- Time Complexity: O(n^2),
- Space Complexity: O(1).
