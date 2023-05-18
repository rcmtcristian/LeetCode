// Given the root of a binary tree, invert the tree, and return its root.

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Main Solution
var invertTree = function(root) {

    if(root === null){
        return null
    }

    let temp =  root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left)
    invertTree(root.right)

    return root
};

// Refactored Solution
var invertTree = function(root) {
    if (!root) {
        return null;
    }
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    // do a swap
    root.right = left;
    root.left = right;
    // root.right = invertTree(root.left);
    return root;
}

// Explanation
// - In this function, we first check if the `root` is `null`. If it is, we return `null` since there are no nodes to invert.
// - Next, we perform the swap of the left and right child nodes using a temporary variable `temp`.
// - Then, we recursively call `invertTree` on the left and right subtrees to invert them as well.
// - Finally, we return the updated `root`.