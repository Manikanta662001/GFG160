# Day16

### Approach

- First, check if the lengths of the strings are equal. If not, return false immediately.
- Create a frequency map for the characters in the first string.
- Loop through the second string:
- If a character doesn't exist in the map or its count is zero, return false.
- Otherwise, decrement the count in the map.
- If all characters match correctly, return true.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(n).
