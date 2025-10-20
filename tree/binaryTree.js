class Node {
  constructor(val) {
    this.value = val;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  addChild(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return;
    } else {
      let currentNode = this.root;
      let added = false;
      while (!added && currentNode) {
        if (currentNode.value === val) {
          console.log("Duplicate value not allowed");
          return "Duplicate value not allowed";
        }
        if (val < currentNode.value) {
          // going to left
          if (currentNode.leftChild === null) {
            currentNode.leftChild = new Node(val);
            added = true;
          } else {
            currentNode = currentNode.leftChild;
          }
        } else if (val > currentNode.value) {
          // going to right
          if (currentNode.rightChild === null) {
            currentNode.rightChild = new Node(val);
            added = true;
          } else {
            currentNode = currentNode.rightChild;
          }
        }
      }
    }
  }
}
let tree = new BinarySearchTree();
tree.addChild(12);
tree.addChild(10);
tree.addChild(8);
tree.addChild(9);
console.log(tree);
