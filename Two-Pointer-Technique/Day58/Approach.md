# Day58

### Approach

- Initialize two pointers: start (beginning of the window) and end (expanding the window).
- Use a Set to store characters in the current window.
- Move the end pointer:
 - If the character is not in the set, add it and update the max length.
 - If the character is in the set, remove characters from the start until the duplicate is removed.
- Continue this process until the end of the string is reached.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(k).
