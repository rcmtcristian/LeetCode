// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:


// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// Main Solution
var lowestCommonAncestor = function(root, p, q) {
    if(p.val < root.val && q.val < root.val){
        return lowestCommonAncestor(root.left, p,  q)
    } else if ( p.val > root.val && q.val > root.val){
        return lowestCommonAncestor(root.right, p, q)
    } else { return root}
};

// Explanation:

// Find the lowest common ancestor of two nodes in a binary search tree. Lowest common ancestor is the lowest node in the tree that has both nodes as descendants. The definition of lowest common ancestor allows a node to be a descendant of itself.

// Finding lowest common ancestor in a binary search tree:
// - Use a recursive algorithm to traverse the tree.
// - Take advantage of the ordered nature of the binary search tree.

// Creating a recursive function to traverse a binary search tree:
// - Values less than the root are held within the left hand side of the tree.
// - If p.val and q.val are both less than the value at root, recurse down the left hand side.

// Implementing binary search algorithm:
// - Values greater than root are always found in the right side of the subtree.
// - If p.val and q.val are greater than root.val, then recurse down the right hand side.

// Finding the lowest common ancestor in a binary search tree:
// - Start at the root and compare values of p and q with the root value.
// - If both p and q are greater than the root value, traverse the right subtree.

// Algorithm has linear time complexity:
// - The algorithm visits each node within the tree in worst cases.
// - The time complexity is O(n).

// Explaining the space utilized by recursive call stack in a binary tree:
// - Visiting each node within the tree takes space of height n.
// - Recursive call stack increases with each level and could be skewed.

// Finding the lowest common ancestor in a binary tree:
// - Check if p and q are greater than root.val to recurse down the right side of the tree.
// - If p and q are on different sides of the root, return the root as the lowest common ancestor.

// Alternative solution:
var lowestCommonAncestor = function(root, p, q) {

const nodeDirectory = []

const queue = [root]
    while(queue.length>0){
        const current = queue.pop()
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)

        if(hasChildNodes(current,p,q)){
            nodeDirectory.push(current)
        }
    }
  
  return nodeDirectory.pop()
    
};


function hasChildNodes(node,p,q){
    let hasP = false;
    let hasQ = false;
    const queue = [node]
    while(queue.length>0){
        const current = queue.pop()
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)

        if(current == p){
            hasP= true;
        }


        if(current == q){
            hasQ= true;
        }

    }

    return hasP && hasQ;
}