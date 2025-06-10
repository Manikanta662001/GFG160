class Solution {
  sortedMerge(head1, head2) {
    // your code here
    let dummy = new Node(-1);
    let tail = dummy;
    while (head1 !== null && head2 !== null) {
      if (head1.data < head2.data) {
        tail.next = head1;
        head1 = head1.next;
      } else {
        tail.next = head2;
        head2 = head2.next;
      }
      tail = tail.next;
    }
    if (head1 !== null) {
      tail.next = head1;
    } else {
      tail.next = head2;
    }
    return dummy.next;
  }
}
// Merge two sorted linked lists

// Given the head of two sorted linked lists consisting of nodes respectively. The task is to merge both
// lists and return the head of the sorted merged list.

// Examples:

// Input: head1 = 5 -> 10 -> 15 -> 40, head2 = 2 -> 3 -> 20
// Output: 2 -> 3 -> 5 -> 10 -> 15 -> 20 -> 40
