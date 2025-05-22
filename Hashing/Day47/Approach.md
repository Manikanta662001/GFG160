# Day47

### Approach

- Store all elements of the array in a Set to allow O(1) lookups.
- Iterate through the array:
 - For each element, check if it is the start of a sequence.
 - If it is the start, keep checking for the next consecutive elements.
- Track the maximum length of such sequences.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(n).
