// Given a binary tree, determine if it is 
// height-balanced
// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

const ckeckHeight = node => {
  if (node === null) return 0;
  
  const left = ckeckHeight(node.left);
  const right = ckeckHeight(node.right);
  
  if (
    // if a previous call has returned false,
    // we need to pass false all the way up
    left === false ||
    right === false ||
    Math.abs(left - right) > 1
  ) {
    return false;
  }
  
  // height of a node
  return Math.max(left, right) + 1;
};

const isBalanced = root => {
  if (root === null) return true;
  
  return ckeckHeight(root) !== false;
};


// Refactored solution

type Node = {
  value: number;
  left: Node | null;
  right: Node | null;
};

const ckeckHeight = (node: Node | null): number | false => {
  if (node === null) return 0;
  
  const left = ckeckHeight(node.left);
  const right = ckeckHeight(node.right);
  
  if (
    // if a previous call has returned false,
    // we need to pass false all the way up
    left === false ||
    right === false ||
    Math.abs(left - right) > 1
  ) {
    return false;
  }
  
  // height of a node
  return Math.max(left, right) + 1;
};

const isBalanced = (root: Node) => {
  if (root === null) return true;
  
  return ckeckHeight(root) !== false;
};

// Alternative solution
var isBalanced = function(root) {
    // function for left and right
    // in the below example, 1.right and 1.left are balanced, but 1 is not balanced. 
    // there is definitely a recursive way to do this. 
    // pass isBalanced, but for root.left, and root.right. 
    // if childred are balanced, then we can go up a level. 
    if (!root) return true;
    let flag = true;
    const depthOfTree = (root) => {
        if (!root.left && !root.right) return 0;
        let leftHeight = 0, rightHeight = 0;
        if (root.left) {
            leftHeight = 1 + depthOfTree(root.left)
        }
        if (root.right) {
            rightHeight = 1 + depthOfTree(root.right)
        }
        let actualHeight = Math.max(leftHeight, rightHeight)
        if (Math.abs(leftHeight - rightHeight) > 1) flag = false;
        return actualHeight
    }
    depthOfTree(root)
    return flag
};
