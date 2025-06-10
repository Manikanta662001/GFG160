# Day66

### Approach

- Find the length of the linked list (len).
- Normalize k to k % len (since rotating by len gives the same list).
- If k === 0, return the original head.
- Traverse to the k-th node and break the list.
- Reconnect the list:
 - Make the node after the k-th node the new head.
 - Link the old tail to the old head.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(1).
