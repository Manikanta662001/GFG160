# Day75

### Approach

- Convert the string into a character array and sort it. This helps to detect duplicates easily.
- Use a visited[] array to track used characters.
- At each recursive call, skip a character if it is the same as the previous and the previous has not been used — this avoids duplicate permutations.
- Store each unique permutation when the current permutation reaches the string's length.

### Complexity

- Time Complexity: O(n * k),
- Space Complexity: O(n * k).
