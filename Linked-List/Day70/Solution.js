class Solution {
  cloneLinkedList(head) {
    // code here
    if (!head) return null;
    let current = head;
    while (current !== null) {
      const copy = new Node(current.data);
      copy.next = current.next;
      current.next = copy;
      current = copy.next;
    }
    current = head;
    while (current !== null) {
      if (current.random !== null) {
        current.next.random = current.random.next;
      }
      current = current.next.next;
    }
    current = head;
    const copiedHead = head.next;
    while (current !== null) {
      const copy = current.next;
      current.next = copy.next;
      if (copy.next !== null) {
        copy.next = copy.next.next;
      }
      current = current.next;
    }
    return copiedHead;
  }
}
// Clone List with Next and Random

// You are given a special linked list with n nodes where each node has two pointers a next pointer that
// points to the next node of the singly linked list, and a random pointer that points to the random node
// of the linked list.

// Construct a copy of this linked list. The copy should consist of the same number of new nodes, where
// each new node has the value corresponding to its original node. Both the next and random pointer of
// the new nodes should point to new nodes in the copied list, such that it also represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// Return the head of the copied linked list.

// NOTE : Original linked list should remain unchanged.

// Examples:

// Input: head = [[1, 3], [3, 3], [5, NULL], [9, 3]]

// Output: head = [[1, 3], [3, 3], [5, NULL], [9, 3]]
// Explanation:
// Node 1 points to Node 2 as its NEXT and Node 3 as its RANDOM.
// Node 2 points to Node 3 as its NEXT and Node 3 as its RANDOM.
// Node 3 points to Node 4 as its NEXT and NULL as its RANDOM.
// Node 4 points to NULL as its NEXT and Node 3 as its RANDOM.
