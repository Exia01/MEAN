//First, We create a Node or a BST

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  //We have created both a Node
  //We now need to add data to it.
  add(data) {
    const node = this.root;
    //this is equal to the root
    if (node === null) {
      //if there is no new node, set the node to be the root.
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
            //if the number is less than the root node goes to the left
          if (node.left === null) {
              //if the node at the left is empty
            node.left = new Node(data);
            //set the node to this position
            return;
          } else if (node.left !== null) {
              //if the node is not empty 
            return searchTree(node.left);
            //keep searching
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
}

const tree = new BST();
tree.add(9);
tree.add(4);
tree.add(5)
tree.add(10)

console.log(tree)