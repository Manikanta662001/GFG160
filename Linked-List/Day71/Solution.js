class Solution {
  // Function to check if the linked list has a loop.
  detectLoop(head) {
    // your code here
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
}
// Detect Loop in linked list

// You are given the head of a singly linked list. Your task is to determine if the linked list contains a loop.
// A loop exists in a linked list if the next pointer of the last node points to any other node in the
// list (including itself), rather than being null.

// Custom Input format:
// A head of a singly linked list and a pos (1-based index) which denotes the position of the node to which
// the last node points to. If pos = 0, it means the last node points to null, indicating there is no loop.

// Examples:

// Input: head: 1 -> 3 -> 4, pos = 2
// Output: true
// Explanation: There exists a loop as last node is connected back to the second node.
