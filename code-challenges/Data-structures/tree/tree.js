'use strict';
const SandQ = require('../stacksAndQueues/stacks-and-queues.js');

class Node {
  constructor(val) {
    this.value = val;
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
    if (!this.root) {
      return results;
    }
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
    if (!this.root) {
      return results;
    }
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
    if (!this.root) {
      return results;
    }
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }
  add(val) {
    let Q = new SandQ.Queue();
    if (!this.root) {
      this.root = new Node(val);
    } else {
      let front;
      Q.enqueue(this.root);

      while (Q.peek().value) {
        front = Q.dequeue();

        if (!front.left) {
          front.left = new Node(val);
          break;
        } else {
          Q.enqueue(front.left);
        }
        if (!front.right) {
          front.right = new Node(val);
          break;
        } else {
          Q.enqueue(front.right);
        }
      }
      front = new Node(val);
    }
  }
}

class BinarySearchTree {
  constructor(tree) {
    this.Q = new SandQ.Queue();
    this.tree = tree;
  }
  add(val) {
    if (!this.tree.root) {
      this.tree.root = new Node(val);
    } else {
      let front;
      this.Q.enqueue(this.tree.root);

      while (this.Q.peek().value) {
        front = this.Q.dequeue();

        if (!front.left) {
          front.left = new Node(val);
          break;
        } else {
          this.Q.enqueue(front.left);
        }
        if (!front.right) {
          front.right = new Node(val);
          break;
        } else {
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
