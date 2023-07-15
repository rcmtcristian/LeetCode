//

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let dummyNode = new ListNode(0);
  dummyNode.next = head;

  // Step 2: Find the node at position left and its previous node
  let leftPrev = dummyNode;
  for (let i = 1; i < left; i++) {
    leftPrev = leftPrev.next;
  }
  let leftNode = leftPrev.next;

  // Step 3: Reverse the portion of the list from left to right
  let rightNode = leftNode;
  let prev = null;
  for (let i = left; i <= right; i++) {
    let next = rightNode.next;
    rightNode.next = prev;
    prev = rightNode;
    rightNode = next;
  }

  // Step 4: Connect the reversed portion back to the original list
  leftPrev.next = prev;
  leftNode.next = rightNode;

  // Step 5: Return the modified list starting from the dummy node's next
  return dummyNode.next;
}

// Alternative Solution
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return head;
  }

  let node = head,
    stack = [];

  while (node) {
    stack.push(node.val);
    node = node.next;
  }

  stack.splice(
    left - 1,
    right - left + 1,
    ...stack.slice(left - 1, right).reverse()
  );

  node = head;
  for (let i = 0; i < stack.length; i += 1) {
    node.val = stack[i];
    node = node.next;
  }

  return head;
}
