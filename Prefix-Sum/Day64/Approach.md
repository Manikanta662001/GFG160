# Day64

### Approach

- Create a result array res[] initialized with 1s.
- Traverse arr[] left to right:
 - For each index i, set res[i] = product of all elements to the left.
- Traverse arr[] right to left:
 - Multiply res[i] with the product of all elements to the right.
- Return res[].

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(1).
