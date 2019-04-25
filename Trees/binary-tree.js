"use strict";
exports.__esModule = true;
var BinaryTree = /** @class */ (function () {
    function BinaryTree(theValue) {
        this.value = theValue;
        this.left = null;
        this.right = null;
    }
    BinaryTree.prototype.insertLeftNode = function (root) {
        if (this.left) {
            // Case 1: A child already exists
            // Shift existing root downwards
            root.left = this.left;
            this.left = root;
        }
        else {
            // Case 2: A child doesn't exist
            // Insert child
            this.left = root;
        }
    };
    BinaryTree.prototype.insertRightNode = function (root) {
        if (this.right) {
            // Case 1: A child already exists
            // Shift existing root downwards
            root.right = this.right;
            this.right = root;
        }
        else {
            // Case 2: A child doesn't exist
            // Insert child
            this.right = root;
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
var root = new BinaryTree(1);
exports.root = root;
var two = new BinaryTree(2);
var three = new BinaryTree(3);
var four = new BinaryTree(4);
var five = new BinaryTree(5);
var six = new BinaryTree(6);
var seven = new BinaryTree(7);
root.insertLeftNode(two);
root.insertRightNode(five);
two.insertLeftNode(three);
two.insertRightNode(four);
five.insertLeftNode(six);
five.insertRightNode(seven);
