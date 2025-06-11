class Solution {
  reverseKGroup(head, k) {
    // code here
    let current = head;
    let prev = null;
    let next = null;
    let count = 0;
    while (current !== null && count < k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }
    if (next !== null) {
      head.next = this.reverseKGroup(next, k);
    }
    return prev;
  }
}
// Linked List Group Reverse

// Given the head a linked list, the task is to reverse every k node in the linked list. If the number of nodes
// is not a multiple of k then the left-out nodes in the end, should be considered as a group and must be
// reversed.

// Examples:

// Input: head = 1 -> 2 -> 2 -> 4 -> 5 -> 6 -> 7 -> 8, k = 4
// Output: 4 -> 2 -> 2 -> 1 -> 8 -> 7 -> 6 -> 5

// Explanation: The first 4 elements 1, 2, 2, 4 are reversed first and then the next 4 elements 5, 6, 7, 8.
//  Hence, the resultant linked list is 4 -> 2 -> 2 -> 1 -> 8 -> 7 -> 6 -> 5.
