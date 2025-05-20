# Day44

### Approach

- Get the length of the input array and Create an empty array result to store valid triplets.
- Triple Nested Loops (Brute Force):
 - Loop i from 0 to n - 2.
 - Loop j from i + 1 to n - 1.
 - Loop k from j + 1 to n.
- Check if arr[i] + arr[j] + arr[k] === 0. If true, push the indices [i, j, k] to result
- Return the array of valid triplet indices.

### Complexity

- Time Complexity: O(n^3),
- Space Complexity: O(1).
