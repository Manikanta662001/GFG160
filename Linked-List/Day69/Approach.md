# Day69

### Approach

- Reverse both linked lists (num1 and num2) to start addition from the least significant digit.
- Initialize carry as 0 and start adding corresponding digits from both lists.
- Create a new node for each digit of the result and maintain carry.
- After traversing both lists, if there is any carry left, add it as a new node.
- Reverse the result list to restore proper order.
- Remove any leading zeros from the final list (except for a single zero).

### Complexity

- Time Complexity: O(max(n, m)),
- Space Complexity: O(max(n, m)).
