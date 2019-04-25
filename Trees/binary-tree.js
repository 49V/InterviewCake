"use strict";
exports.__esModule = true;
var BinaryTree = /** @class */ (function () {
    function BinaryTree(theValue) {
        this.value = theValue;
        this.left = null;
        this.right = null;
    }
    BinaryTree.prototype.insertLeftNode = function (node) {
        if (this.left) {
            // Case 1: A child already exists
            // Shift existing node downwards
            node.left = this.left;
            this.left = node;
        }
        else {
            // Case 2: A child doesn't exist
            // Insert child
            this.left = node;
        }
    };
    BinaryTree.prototype.insertRightNode = function (node) {
        if (this.right) {
            // Case 1: A child already exists
            // Shift existing node downwards
            node.right = this.right;
            this.right = node;
        }
        else {
            // Case 2: A child doesn't exist
            // Insert child
            this.right = node;
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
var node = new BinaryTree(1);
exports.node = node;
var two = new BinaryTree(2);
var three = new BinaryTree(3);
var four = new BinaryTree(4);
var five = new BinaryTree(5);
var six = new BinaryTree(6);
var seven = new BinaryTree(7);
node.insertLeftNode(two);
node.insertRightNode(five);
two.insertLeftNode(three);
two.insertRightNode(four);
five.insertLeftNode(six);
five.insertRightNode(seven);
