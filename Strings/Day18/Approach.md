# Day18

### Approach

- Create an empty array indexes and Store the lengths of pat and txt to avoid recalculating in the loop.
- Loop through the string only till txt.length - pat.length to check only necessary index position.
- Extract the text from txt and compare with pattern.
- If a match is found, push the index i into the result array.
- finally return the result.

### Complexity

- Time Complexity: O(n \* m),
- Space Complexity: O(k).
