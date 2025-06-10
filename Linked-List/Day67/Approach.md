# Day67

### Approach

- Create a dummy node to simplify edge case handling and to act as the start of the merged list.
- Maintain a tail pointer that always points to the last node in the merged list. Start with the dummy node.
- Use two pointers (head1 and head2) to traverse both lists simultaneously.
- Compare Current Nodes
 - At each step, compare the data of the current nodes.
 - Attach the smaller node to tail.next, then move the corresponding pointer ahead.
- After one list ends, attach the remaining nodes from the other list (since both lists are sorted).
- Return dummy.next as the head of the newly merged sorted list.

### Complexity

- Time Complexity: O(n + m),
- Space Complexity: O(1).
