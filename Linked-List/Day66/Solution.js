class Solution {
  // Function to rotate a linked list.
  rotate(head, k) {
    // your code here
    if (!head || k === 0) return head;
    let len = 1;
    let tail = head;
    while (tail.next) {
      tail = tail.next;
      len++;
    }
    k = k % len;
    if (k === 0) return head;
    let prev = null;
    let curr = head;
    for (let i = 0; i < k; i++) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
    tail.next = head;
    return curr;
  }
}
// Rotate a Linked List

// Given the head of a singly linked list, your task is to left rotate the linked list k times.

// Examples:

// Input: head = 10 -> 20 -> 30 -> 40 -> 50, k = 4
// Output: 50 -> 10 -> 20 -> 30 -> 40
// Explanation:
// Rotate 1: 20 -> 30 -> 40 -> 50 -> 10
// Rotate 2: 30 -> 40 -> 50 -> 10 -> 20
// Rotate 3: 40 -> 50 -> 10 -> 20 -> 30
// Rotate 4: 50 -> 10 -> 20 -> 30 -> 40
