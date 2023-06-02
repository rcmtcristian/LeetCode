// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

 

// Example 1:


// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:

// Input: root = [1,2]
// Output: 1

// Main Solution

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  const getHeight = (node) => {
    if (node === null) {
      return 0;
    }
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  };

  // Corrected function expression
  const calculateDiameter = (rootNode) => {
    if (rootNode === null) {
      return 0;
    }
    const leftHeight = getHeight(rootNode.left);
    const rightHeight = getHeight(rootNode.right);
    const leftDiameter = calculateDiameter(rootNode.left);
    const rightDiameter = calculateDiameter(rootNode.right);
    return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
  };

  return calculateDiameter(root);
};


// Explanation
// 1 - Create a helper function called getHeight that takes a node as input and returns the height of the node.

//If the node is null, return 0. Otherwise, recursively calculate the height of the left and right subtrees by calling the getHeight function on each subtree and taking the maximum of the two heights. Add 1 to account for the current node.

// 2 - Create a recursive function called diameterOfBinaryTree that takes the root node as input and returns the diameter of the binary tree.

// If the root node is null, return 0.

// Calculate the height of the left subtree by calling the getHeight function on the left child of the root.

// Calculate the height of the right subtree by calling the getHeight function on the right child of the root.

// Calculate the diameter of the left subtree recursively by calling the diameterOfBinaryTree function on the left child of the root.

// Calculate the diameter of the right subtree recursively by calling the diameterOfBinaryTree function on the right child of the root.

// Return the maximum of the following three values:
// Diameter of the left subtree.
// Diameter of the right subtree.
// Height of the left subtree + Height of the right subtree (to consider the longest path that passes through the root).

// Time Complexity
// O(n) to traverse the tree once and calculate the height of each node.

// Alternative Solution
var diameterOfBinaryTree = function(root) {

    // get height
    // sumDepth
    //maxDepth

    // declare maxDepth variable
    let maxDepth = 0;

    // declare getHeight function
    const getHeight = (node) => {

        // if node is null, return 0
        if (!node) return 0;
        
        // declare left and right variables
        let left = getHeight(node.left);
        let right = getHeight(node.right)

        // update maxDepth with left + right
        maxDepth = Math.max(maxDepth, left + right)

        // return 1 + max of left and right
        return 1 + Math.max(left, right)
    }

    // call getHeight on root
    getHeight(root)

    // return maxDepth
    return maxDepth;
    
};