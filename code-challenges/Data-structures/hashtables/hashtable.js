'use strict';

const LL = require('../linkedList/linked-list.js');

class HashTable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  add(key, val) {
    let index = this.hash(key);
    if (!this.storage[index]) {
      const ll = new LL();
      ll.prepend({ [key]: val });
      this.storage[index] = ll;
    } else {
      this.storage[index].prepend({ [key]: val });
    }
  }
  get(key) {
    let index = this.hash(key);
    if (!this.storage[index]) {
      return null;
    }
    let currentNode = this.storage[index].head;
    while (currentNode.value) {
      if (currentNode.value[key]) {
        return currentNode.value[key];
      }
      currentNode = currentNode.next;
      if (!currentNode) {
        return null;
      }
    }
  }
  contain(key) {
    let index = this.hash(key);
    //if the hash table is full and it doesn't contain the key it will give an error
    if (this.storage[index]) {
      let currentNode = this.storage[index].head;
      console.log(currentNode.value);
      while (currentNode.value) {
        if (currentNode.value[key]) {
          // return currentNode.value[key];
          return true;
        }
        currentNode = currentNode.next;
        if (!currentNode) {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  hash(key) {
    // why isn't this pushed yet
    let code = key.toString().split('').reduce((a, item) => {
      return a + item.charCodeAt(0);
    }, 0);
    let hashKey = (code * 19) % this.size;
    return hashKey;

  }
}

module.exports = HashTable;
