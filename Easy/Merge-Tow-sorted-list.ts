// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Main Solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  let head = null;
  let temp = head;
  if (list1.val < list2.val) {
    temp = head = new ListNode(list1.val);
    list1 = list1.next;
  } else {
    temp = head = new ListNode(list2.val);
    list2 = list2.next;
  }

  while (list1 && list2) {
    if (list1.val < list2.val) {
      temp.next = new ListNode(list1.val);
      list1 = list1.next;
      temp = temp.next;
    } else {
      temp.next = new ListNode(list2.val);
      list2 = list2.next;
      temp = temp.next;
    }
  }

  while (list1) {
    temp.next = new ListNode(list1.val);
    list1 = list1.next;
    temp = temp.next;
  }

  while (list2) {
    temp.next = new ListNode(list2.val);
    list2 = list2.next;
    temp = temp.next;
  }
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}


// Explanation
var mergeTwoLists = function (l1, l2) {
    // Check if either of the lists is null 
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    // Head of the new linked list - this is the head of the resultant list
    let head = null;
    // Reference of head which is null at this point
    let temp = head;
    // Choose head which is smaller of the two lists
    if (l1.val < l2.val) {
        temp = head = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        temp = head = new ListNode(l2.val);
        l2 = l2.next;
    }
    // Loop until any of the list becomes null
    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = new ListNode(l1.val);
            l1 = l1.next;
            temp = temp.next;
        } else {
            temp.next = new ListNode(l2.val);
            l2 = l2.next;
            temp = temp.next;
        }
    }
    // Add all the nodes in l1, if remaining
    while (l1) {
        temp.next = new ListNode(l1.val);
        l1 = l1.next;
        temp = temp.next;
    }
    // Add all the nodes in l2, if remaining
    while (l2) {
        temp.next = new ListNode(l2.val);
        l2 = l2.next;
        temp = temp.next;
    }
    return head;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// Time Complexity # O(m + n) where m and n are the lengths of the two linked lists.
// Space Complexity # O(1) since we are not using any extra space to store the values of nodes. We are only manipulating the pointers.

// Alternate Solution

// @flow
// @prettier
type ListNode = {
  val: number,
  next: ListNode | null
};

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode => {
  let newList: ListNode = { val: 0, next: null };
  let pointer: ListNode = newList;
  while (list1 !== null || list2 !== null) {
    if (list1 === null) {
      newList.next = list2;
      list2 = null;
    } else if (list2 === null) {
      newList.next = list1;
      list1 = null;
    } else if (list1.val <= list2.val) {
      newList.next = list1;
      list1 = list1.next;
    } else if (list2.val < list1.val) {
      newList.next = list2;
      list2 = list2.next;
    }
    newList = newList.next;
  }
  return pointer.next;
};

// Refactored Solution
var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode(0);
    let pointer = newList;
    while (list1 !== null || list2 !== null) {
        if (list1 === null) {
            newList.next = list2;
            list2 = null;
        } else if (list2 === null) {
            newList.next = list1;
            list1 = null;
        } else if (list1.val <= list2.val) {
            newList.next = list1;
            list1 = list1.next;
        } else if (list2.val < list1.val) {
            newList.next = list2;
            list2 = list2.next;
        }
        newList = newList.next;
    }
    return pointer.next;
};