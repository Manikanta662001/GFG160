class Solution {
  reverse(head) {
    let prev = null;
    while (head !== null) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }
  addTwoLists(num1, num2) {
    // code here
    num1 = this.reverse(num1);
    num2 = this.reverse(num2);
    let dummy = new Node(-1);
    let current = dummy;
    let carry = 0;
    while (num1 !== null || num2 !== null || carry > 0) {
      let sum = carry;
      if (num1 !== null) {
        sum += num1.data;
        num1 = num1.next;
      }
      if (num2 !== null) {
        sum += num2.data;
        num2 = num2.next;
      }
      carry = Math.floor(sum / 10);
      current.next = new Node(sum % 10);
      current = current.next;
    }
    let result = this.reverse(dummy.next);
    while (result !== null && result.data === 0 && result.next !== null) {
      result = result.next;
    }
    return result;
  }
}
// Add Number Linked Lists

// Given the head of two singly linked lists num1 and num2 representing two non-negative integers.
// The task is to return the head of the linked list representing the sum of these two numbers.

// For example, num1 represented by the linked list : 1 -> 9 -> 0, similarly num2 represented by the linked
// list: 2 -> 5. Sum of these two numbers is represented by 2 -> 1 -> 5.

// Note: There can be leading zeros in the input lists, but there should not be any leading zeros in the
// output list.

// Examples:

// Input: num1 = 4 - > 5, num2 = 3 -> 4 -> 5
// Output:  3 -> 9 -> 0

// Explanation: Given numbers are 45 and 345. There sum is 390.
