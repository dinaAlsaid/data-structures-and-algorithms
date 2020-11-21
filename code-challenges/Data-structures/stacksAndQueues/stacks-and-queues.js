'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.top) {
      newNode.next = null;
    } else {
      newNode.next = this.top;
    }
    this.top = newNode;
  }
  pop() {
    if (!this.top) {
      return 'empty';
    } else {
      let preTop = this.top;
      this.top = this.top.next;
      preTop.next = null;
      return preTop.value;
    }
  }
  peek() {
    if (!this.top) {
      return 'empty';
    } else {
      return this.top.value;
    }
  }
  isEmpty() {
    if (!this.top) {
      //empty
      return true;
    } else {
      //not empty
      return false;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.front) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;
  }
  dequeue() {
    if (!this.front && !this.rear) {
      return 'empty';
    } else if (this.rear === this.front){
      let retVal = this.rear.value;
      this.rear=null;
      this.front=null;
      return retVal;
    }else{
      let prefront = this.front;
      this.front = this.front.next;
      prefront.next = null;
      return prefront.value;
    }
  }
  peek() {
    if (!this.front && !this.rear) {
      return 'empty';
    } else {
      return this.front.value;
    }
  }
  isEmpty() {
    if (!this.front && !this.rear) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  Stack: Stack,
  Queue: Queue,
};
