# Day73

### Approach

- Detect the loop using slow and fast pointers.
- Find the start of the loop (first node that is part of the loop).
- Find the last node in the loop and set its .next to null.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(1).
