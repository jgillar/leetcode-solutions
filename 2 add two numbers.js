/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let summing = true; //whether or not there is still something left to add
  let carry = 0;
  let sum = 0;
  let pointer1 = l1;
  let pointer2 = l2;
  let pointer = l1;

  let lsum = null;
  let lsumPointer = null;

  while (summing) {
    if (pointer1 && pointer2 != null) {
      sum = pointer1.val + pointer2.val;
    } else {
      //if one number is longer than the other
      //one pointer is going to be null while
      //the other is still pointing to the longer number
      if (pointer1 != null) {
        sum = pointer1.val;
      } else if (pointer2 != null) {
        sum = pointer2.val;
      } else {
        sum = 0; //both pointers are null, we're just adding the carry from last sum
      }
    }

    sum += carry === 1 ? 1 : 0;

    carry = sum >= 10 ? 1 : 0;

    //single digit sum
    sum = sum % 10;

    let node = new ListNode(sum);

    //initial run through needs to set up the sum linked list
    if (lsum === null) {
      lsum = node;
      lsumPointer = lsum;
    } else {
      //have the current sum node point to the new node
      lsumPointer.next = node;

      //point to the new node
      lsumPointer = node;
    }

    if (pointer === null) break;

    pointer1 = pointer1 != null ? pointer1.next : null;
    pointer2 = pointer2 != null ? pointer2.next : null;
    pointer = pointer1 === null ? pointer2 : pointer1;

    if (pointer === null && carry === 0) summing = false;
  }

  return lsum;
};
