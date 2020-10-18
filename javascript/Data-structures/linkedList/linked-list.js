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
    if(currentNode.value === val){
      return true;
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
  append(val) {
    return this.insert(val);
  }
  insertBefore(val, newVal) {
    let currentNode = this.head;
    let newNode = new Node(newVal);

    if (this.includes(val)) {
      if (this.head.value === val) {
        newNode.next = currentNode;
        this.head = newNode;
        return this;
      } else {
        while (currentNode.next) {
          if (currentNode.next.value === val) {
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            return this;
          }
          currentNode = currentNode.next;
        }
      }
    } else {
      return "exception";
    }
  }
  insertAfter(val, newVal) {
    let currentNode = this.head;
    let newNode = new Node(newVal);
    if (this.includes(val)) {
      while (currentNode.next) {
        if (currentNode.value === val) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          return this;
        }
        currentNode = currentNode.next;
      }
      // to check the value of the last node
      if(currentNode.value === val){
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;

      }
    } else {
      return "exception";
    }
  }
}

module.exports = LinkedList;
