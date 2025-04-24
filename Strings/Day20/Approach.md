# Day20

### Approach

- If s2 is a rotation of s1, then it will always be a substring of s1 + s1.
- So, just add s1 + s1 and then check s2 is present in that added string or not.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(n).
