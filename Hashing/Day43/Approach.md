# Day43

### Approach

- Initialize a frequency(freq) and a counter (count).
- For each number in the array:
 - Calculate its complement (target - num).
 - If complement exists in the map, add its frequency to count.
 - Update the frequency of the current number.
- Return the final count.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(n).
