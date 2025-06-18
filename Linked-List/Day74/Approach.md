# Day74

### Approach

- This approach uses a Map which preserves insertion order.
- On each get, we re-insert the key to mark it as most recently used.
- On put, if the key exists, we update it. If not and we're at capacity, we evict the first inserted (least recently used).

### Complexity

- Time Complexity: O(1),
- Space Complexity: O(cap).
