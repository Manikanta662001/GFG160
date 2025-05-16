# Day42

### Approach

- Create an empty set seen to store elements we've iterated over.
- For each element num in arr:
 - Calculate complement = target - num.
 - If complement exists in seen, we've found our answer → return true.
 - Else, add num to seen.
- If the loop completes without finding a pair, return false.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(n).
