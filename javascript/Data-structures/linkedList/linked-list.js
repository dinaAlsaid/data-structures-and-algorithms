"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      return node;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  includes(val) {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value == val) {
        return true;
      }
      currentNode = currentNode.next;
    }
    //if not found
    return false;
  }
  toString() {
    let retString = "";
    let currentNode = this.head;
    while (currentNode.next) {
      retString = `${retString}{${currentNode.value}}=>`;
      currentNode = currentNode.next;
    }
    return `${retString}{${currentNode.value}}=> NULL`;
  }
}

module.exports = LinkedList;
