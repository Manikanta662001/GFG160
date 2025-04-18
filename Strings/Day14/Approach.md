# Day14

### Approach

- First Skip Leading Whitespaces.
- After skipping spaces, check if the next character is '+' or '-'.
- Set a sign variable to 1 (default) or -1 based on the input.
- For each digit character ('0' to '9'), convert it to its numeric value using charCodeAt.
- After collecting digits, apply the sign to get the final result.
- If the result is 0, return 0 instead of -0 (to avoid formatting issues).
- If the result exceeds INT_MAX (2³¹ - 1) or is less than INT_MIN (-2³¹),clamp the result within this range.
- finally return the result.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(1).
