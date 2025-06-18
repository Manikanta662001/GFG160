# Day71

### Approach

- Use two pointers, slow and fast, both starting at the head.
- Move slow by one step and fast by two steps in each iteration.
- If there is a loop, the slow and fast pointers will eventually meet.
- If fast or fast.next becomes null, there is no loop.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(1).
