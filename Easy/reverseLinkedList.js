// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Main Solution
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // start at head
  let next = null;
  let current = head;
  let prev = null;
  // while not at end of list
  while(current !== null){
    // save next
    next = current.next;
    // reverse pointer
    current.next = prev
    // advance prev and current
    prev = current;
    current = next
  }
  // return prev
  return prev
}

// Alternate Solution
// Initialize prev to null
let prev = null; 
// While there is a value in head
while(head){
    // Let temp equal head.next
    let temp = head.next; 
    // Set head.next to prev
    head.next = prev; 
    // Set prev equal to head
    prev = head; 
    // Set head equal to temp
    head = temp; 
}
return prev; 