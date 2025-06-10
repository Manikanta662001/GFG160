# Day65

### Approach

- Initialize:
 - prev = null – this will be the new head at the end.
 - curr = head – start traversing from the original head.
- Iterate through the list:
 - Store the next node: next = curr.next.
 - Reverse the link: curr.next = prev.
 - Move prev and curr one step forward.
- Return prev as the new head.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(1).
