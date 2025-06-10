class Solution {
  reverseList(head) {
    // your code here
    let prev = null;
    let current = head;
    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
}
// Reverse a linked list

// Given the head of a linked list, the task is to reverse this list and return the reversed head.

// Examples:

// Input: head: 1 -> 2 -> 3 -> 4 -> NULL
// Output: head: 4 -> 3 -> 2 -> 1 -> NULL
