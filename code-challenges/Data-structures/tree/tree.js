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

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    this.Q = new SandQ.Queue();
  }
  add(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      const traverse = (current) => {
        if (node.value <= current.value) {
          if (current.left) {
            traverse(current.left);
          } else {
            current.left = node;
          }
        } else if (node.value > current.value) {
          if (current.right) {
            traverse(current.right);
          } else {
            current.right = node;
          }
        }
      };
      traverse(this.root);
    }
  }
  contain(val) {
    let arr = this.preOrder();
    if (arr.includes(val)) {
      return true;
    } else {
      return false;
    }
  }
}

let BT = new BinarySearchTree();
BT.add(5);
BT.add(2);
BT.add(6);
BT.add(3);
console.log(BT.contain(3));

module.exports = { BinarySearchTree, BinaryTree };
