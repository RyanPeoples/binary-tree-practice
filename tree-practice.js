const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  while(rootNode.left){
    rootNode = rootNode.left
  }
  return rootNode.val
}

function findMaxBST (rootNode) {
  while (rootNode.right) {
    rootNode = rootNode.right
  }
  return rootNode.val
}

function findMinBT(rootNode, min = rootNode.val) {
  if (!rootNode) return min;
  if (rootNode.val < min) min = rootNode.val;
  if(rootNode.left){
    if (min > rootNode.left.val) return findMinBT(rootNode.left, min);
  }
  if(rootNode.right){
    if (min > rootNode.right.val) return findMinBT(rootNode.right, min);
  }


  return min;

}

function findMaxBT(rootNode, max = rootNode.val) {
  if (!rootNode) return max;
  if (rootNode.val > max) max = rootNode.val;
  //check for null ends
  if(!rootNode.left){
    return findMaxBT(rootNode.right, max);
  } else if(!rootNode.right){
    return findMaxBT(rootNode.left, max);
  }
  //if both are valid
  if (rootNode.left || rootNode.right) {
    if(rootNode.right.val<rootNode.left.val){
      return findMaxBT(rootNode.left, max);
    } else{
      return findMaxBT(rootNode.right, max);
    }
  }

  // if (max < rootNode.left.val) return findMaxBT(rootNode.left, max);
  // if (rootNode.right) {
  //   if (max < rootNode.right.val) return findMaxBT(rootNode.right, max);
  // }


  return max;
}

function getHeight (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function balancedTree (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
