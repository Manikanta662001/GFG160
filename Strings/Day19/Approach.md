# Day19

### Approach

- Reverse the string and Concatenate the original string + a separator ($) + reversed string.
- Build the LPS (Longest Prefix Suffix) array for the combined string.
- The last value in the LPS array tells us the length of the longest palindromic prefix.
- Finally, Subtract LPS array last value from total length.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(n).
