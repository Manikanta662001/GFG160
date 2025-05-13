# Day36

### Approach

- Initialize boundaries:
 - top = 0, bottom = n - 1.
 - left = 0, right = m - 1.
- Traverse in 4 directions:
 - Left to right (along the top row).
 - Top to bottom (along the right column).
 - Right to left (along the bottom row).
 - Bottom to top (along the left column).
- Shrink the boundaries after each loop:
 - After traversing top row, move top down.
 - After traversing right column, move right left.
 - After traversing bottom row, move bottom up.
 - After traversing left column, move left right.
- Repeat until all elements are visited.

### Complexity

- Time Complexity: O(n * m),
- Space Complexity: O(n * m).
