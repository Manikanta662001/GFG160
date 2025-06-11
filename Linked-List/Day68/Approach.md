# Day68

### Approach

- Reverse first k nodes using a loop.
- Recursively call the function on the next part of the list.
- Connect the tail of the reversed group to the result of the next recursive call.
- Return the new head after reversal.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(n / k).
