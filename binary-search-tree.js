// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    let node = new TreeNode(val);
    if (!this.root) this.root = node;
    else {
      while (currentNode) {
        let currentValue = currentNode.val;
        if (currentValue > val) {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = node;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  search(val) {
    // Your code here
    let currentNode = this.root;
    while (currentNode) {
      let currentValue = currentNode.val;
      if (currentValue === val) return true;
      if (currentValue > val) {
        currentNode = currentNode.left;
      }
      if (currentValue < val) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
    while (currentNode) {
      console.log(currentNode.val);
      if (currentNode.left) this.preOrderTraversal(currentNode.left);
      if (currentNode.right) this.preOrderTraversal(currentNode.right);
      break;
    }
  }
  inOrderTraversal(currentNode = this.root) {
    // Your code here
    while (currentNode) {
      if (currentNode.left) this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      if (currentNode.right) this.inOrderTraversal(currentNode.right);
      break;
    }
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
    while (currentNode) {
      if (currentNode.left) this.postOrderTraversal(currentNode.left);
      if (currentNode.right) this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
      break;
    }
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
  }
}
bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
bst.inOrderTraversal();
module.exports = { BinarySearchTree, TreeNode };
