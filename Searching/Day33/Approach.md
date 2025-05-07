# Day33

### Approach

- Sort Stalls in ascending order so that we can do distance calculations.
- The possible minimum distances can range from 1 to max(stalls) - min(stalls).
- Try placing cows in the stalls such that the minimum distance between them is at least mid.
- If it's possible to place all k cows, try for a larger distance (move right).
- If not, reduce the distance (move left).

### Complexity

- Time Complexity: O(n log n + n log D),
- Space Complexity: O(1).
