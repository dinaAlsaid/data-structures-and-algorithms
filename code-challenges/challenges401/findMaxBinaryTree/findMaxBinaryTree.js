"use strict";

const tree = require("../../Data-structures/tree/tree.js");

tree.BinaryTree.prototype.findMaximumValue = function (){
  let max = 0;
  let arr = this.preOrder();
  if(arr.length === 0){
    return 'empty tree no max'
  }
  arr.forEach((item) => {
    if (item > max) {
      max = item;
    }
  });
  return max;
};

module.exports = new tree.BinaryTree();