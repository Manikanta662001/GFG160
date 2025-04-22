# Day15

### Approach

- Start from the rightmost characters of both strings.
- Use pointers i and j to track positions in s1 and s2.
- For each position, extract digits using parseInt() if the index is valid; otherwise, use 0.
- Compute the sum of both digits and the carry.
- The current bit of the result is sum % 2.The new carry is Math.floor(sum / 2).
- finally remove unwanted zeros.

### Complexity

- Time Complexity: O(max(n, m)),
- Space Complexity: O(max(n, m)).
