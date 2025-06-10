# Day57

### Approach

- Use a Map to track the frequency of elements in the current window of size k.
- Slide the window one element at a time:
 - Add the new element entering the window.
 - Remove the old element exiting the window.
- The size of the Map at any step gives the number of distinct elements in that window.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(k).
