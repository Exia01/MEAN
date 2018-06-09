class BST {
  constructor() {
    this.root = null;
  }
}
//creates the tree
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
//creates the nodes 

first = new BST();
 //creates a tree
first.root = new Node(30);

//insserts the node in the tree
first.root.right = new Node(50); /// this takes too long to seacrh 

BST.prototype.insert = function(val) {
    
}

