/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */

var removeLeafNodes = function(root, target) {
  if (root == null) return root;

  //if this is a leaf node with the target value, remove it
  if (root.left === null && root.right === null && root.val === target) {
    return null;
  }

  //if it's not a leaf, then traverse its next two nodes
  var resLeft = removeLeafNodes(root.left, target);
  var resRight = removeLeafNodes(root.right, target);

  //if both of the nodes were leaves matching the target, then they were removed
  //this node is now a leaf node as well and needs to be checked
  if ((resLeft === null) & (resRight === null) && root.val === target) {
    return null;
  }

  root.left = resLeft;
  root.right = resRight;

  return root;
};
