"use strict";
exports.__esModule = true;
var binary_tree_1 = require("./binary-tree");
// Performs a pre-order traversal on a binary tree
function traversePreOrder(node) {
    console.log(node.value);
    if (node.left) {
        traversePreOrder(node.left);
    }
    if (node.right) {
        traversePreOrder(node.right);
    }
}
traversePreOrder(binary_tree_1.node);
