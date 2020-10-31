"use strict";
const SandQ = require("../stacksAndQueues/stacks-and-queues.js");

class Node {
  constructor() {
    this.value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const results = [];
    const traverse = (node) => {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    const results = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    const results = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }
}

class BinarySearchTree {
  constructor(tree) {
    this.Q = new SandQ.queue();
    this.tree = tree;
  }
  add(val) {
    if (!this.tree.root == null) {
      this.tree.root = new Node(val);
    } else {
      let front;
      this.Q.enqueue(this.tree.root);

      while (this.Q.peek()) {
        front = this.Q.dequeue();
        if (front.left) {
          this.Q.enqueue(front.left);
        }
        if (front.right) {
          this.Q.enqueue(front.right);
        }
      }
      front = new Node(val);
    }
  }
  contain(val) {
    let arr = this.tree.preOrder();
    if (arr.includes(val)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { BinarySearchTree, BinaryTree };
