class BinaryTree {
  public value: number;
  public left?: BinaryTree;
  public right?: BinaryTree;

  constructor(theValue: number) {
    this.value = theValue;
    this.left = null;
    this.right = null;
  }

  insertLeftNode(root: BinaryTree) {
    if(this.left) {
      // Case 1: A child already exists
      // Shift existing root downwards
      root.left = this.left;
      this.left = root; 
    } else {
      // Case 2: A child doesn't exist
      // Insert child
      this.left = root;
    }
  }

  insertRightNode(root: BinaryTree) {
    if(this.right) {
      // Case 1: A child already exists
      // Shift existing root downwards
      root.right = this.right;
      this.right = root;
    } else {
      // Case 2: A child doesn't exist
      // Insert child
      this.right = root;
    }
  }
  
}

let root = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);
let six = new BinaryTree(6);
let seven = new BinaryTree(7);

root.insertLeftNode(two);
root.insertRightNode(five);
two.insertLeftNode(three);
two.insertRightNode(four);
five.insertLeftNode(six);
five.insertRightNode(seven);

export {root, BinaryTree};