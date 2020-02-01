/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
let serialize = function(root) {
  //check for empty tree
  if (root === null) {
    return "[]";
  }

  let discovered = [root];
  let result = "[";

  while (discovered.length !== 0) {
    //at this point, all nodes in the queue are int he same level
    //we want to go level by level for a level order traversal
    let numInCurrentLevel = discovered.length;
    for (let i = 0; i < numInCurrentLevel; i++) {
      let node = discovered.shift();
      if (node) {
        result += node.val + ",";
        discovered.push(node.left);
        discovered.push(node.right);
      } else {
        result += "null,";
      }
    }
  }

  //remove trailing ',' for neatness
  result += "]";
  result = result.replace(",]", "]");

  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
//idea: the serialized string was created through level order traversal
//make a queue and push an entire level to it before constructing the tree
let deserialize = function(data) {
  //check for empty tree string first
  if (data.length === 2) {
    return null;
  }

  //strip brackets and split into an array
  let arr = data.substring(1, data.length - 1).split(",");

  let queue = [];
  let tree = new TreeNode();
  tree.val = arr.shift();
  queue.push(tree);

  while (queue.length !== 0) {
    let node = queue.shift();
    //because of the way I did serialize(), every node explicitly has two child nodes
    //as a result, dequeing twice will never throw an exception
    let left = arr.shift();
    let right = arr.shift();

    if (left !== "null") {
      let leftChild = new TreeNode(left);
      queue.push(leftChild);
      node.left = leftChild;
    }
    if (right !== "null") {
      let rightChild = new TreeNode(right);
      queue.push(rightChild);
      node.right = rightChild;
    }
  }

  return tree;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
