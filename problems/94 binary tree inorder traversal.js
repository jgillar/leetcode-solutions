/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//iterative version
var inorderTraversal = function(root) {
  let stack = [];
  let list = [];
  let node = root;
  while (node || stack.length) {
    //go to the leftmost leaf
    while (node) {
      stack.push(node);
      node = node.left;
    }
    //if the stack is empty we're at the rightmost leaf
    if (!stack.length) {
      break;
    }
    node = stack.pop();
    list.push(node.val);
    //move to right subtree
    node = node.right;
  }

  return list;
};

let rInorder = function(root, arr) {
  if (root) {
    rInorder(root.left, arr);
    arr.push(root.val);
    rInorder(root.right, arr);
  }

  return arr;
};

//recursive version
let rInorderTraversal = function(root) {
  let arr = [];

  arr = rInorder(root, arr);

  return arr;
};
