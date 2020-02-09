/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let insertionSortList = function(head) {
  let current = head;
  let result = null;

  while (current !== null) {
    let next = current.next;
    let insertAfter = result;

    //insert at beginning of list
    if (result === null || current.val <= result.val) {
      current.next = result;
      result = current;
    } else {
      //find spot to insert
      while (insertAfter.next !== null && insertAfter.next.val < current.val) {
        insertAfter = insertAfter.next;
      }
      current.next = insertAfter.next;
      insertAfter.next = current;
    }
    current = next;
  }

  return result;
};
