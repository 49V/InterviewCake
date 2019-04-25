"use strict";
exports.__esModule = true;
var binary_tree_1 = require("../binary-tree");
/*
* Iteratively checks if a binary tree is superbalanced (the difference in height between the leaves is no greater than 1)
* Inputs
* @param root - typeof BinaryTree - Root node of binary tree to be checked
* Returns
* IF superbalanced - return True
* ELSE - return False
*/
function isSuperbalanced(root) {
    if (!root) {
        return true;
    }
    // Initialize nodes to a tuple of two numbers (First is the node's value, the second is the depth)
    var nodes = [];
    var depths = [];
    var depth = 0;
    nodes.push([root, depth]);
    while (nodes.length) {
        // Pop our node off of our stack
        var nodePair = nodes.pop();
        var node = nodePair[0];
        var depth_1 = nodePair[1];
        var isLeaf = (!node.left && !node.right);
        if (isLeaf) {
            // Case 1: Node is a leaf; Update our depth and check if superbalanced
            if (depths.indexOf(depth_1) < 0) {
                depths.push(depth_1);
                // The tree is no longer superbalanced if:
                //  1) We have 2 depths with a difference greater than 2
                //  2) We have more than 2 depths
                if ((depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1) || depths.length > 2) {
                    return false;
                }
            }
        }
        else {
            // Case 2: Node isn't a leaf; Traverse the children
            if (node.left) {
                nodes.push([node.left, depth_1 + 1]);
            }
            if (node.right) {
                nodes.push([node.right, depth_1 + 1]);
            }
            console.log("New Nodes: ", nodes);
        }
    }
    return true;
}
console.log(isSuperbalanced(binary_tree_1.root));
