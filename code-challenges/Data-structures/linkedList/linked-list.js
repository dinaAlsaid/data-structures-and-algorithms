'use strict';

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
      if (currentNode.value === val) {
        return true;
      }
      currentNode = currentNode.next;
    }
    if (currentNode.value === val) {
      return true;
    }
    //if not found
    return false;
  }
  toString() {
    let retString = '';
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
      return 'exception';
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
      if (currentNode.value === val) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;
      }
    } else {
      return 'exception';
    }
  }

  returnFromTheEnd(k) {
    let currentNode = this.head;
    let llArr = [];
    while (currentNode.next) {
      llArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    // to take the last element too
    llArr.push(currentNode.value);
    if (k <= llArr.length - 1 && k >= 0) {
      let i;
      for (i = llArr.length - 1; i > llArr.length - 1 - k; i--) {
        // will increment the i according to k then i will be used outside the loop
      }
      return llArr[i];
    } else {
      return 'exception';
    }
  }
  prepend(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this.head;
  }

}

module.exports = LinkedList;
