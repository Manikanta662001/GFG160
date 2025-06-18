# Day72

### Approach

- Detect the loop using Floyd’s Algorithm (Tortoise and Hare):
 - Move slow by one and fast by two steps.
 - If they meet, a loop exists.
- Find the first node of the loop:
 - Reset slow to the head of the list.
 - Move both slow and fast one step at a time.
 - The node where they meet is the first node of the loop.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(1).
