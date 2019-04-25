import { root, BinaryTree} from './binary-tree';

// Performs a pre-order traversal on a binary tree
function traversePreOrder(node: BinaryTree) {
  console.log(node.value);

  if(node.left) {
    traversePreOrder(node.left);
  }

  if(node.right) {
    traversePreOrder(node.right);
  }
}

traversePreOrder(root);