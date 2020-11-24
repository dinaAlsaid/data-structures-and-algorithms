'use strict';

const HashTable = require('../../Data-structures/hashtables/hashtable.js');
// const {BinaryTree} = require('../../Data-structures/tree/tree.js');

/**
 * @param {BinaryTree} tree1 - first input tree
 * @param {BinaryTree} tree2 - second input tree
 */

function treeInsertion(tree1, tree2) {
  // assuming tree inputs we can use tree methods
  let tree1Arr = tree1.preOrder();
  let tree2Arr = tree2.preOrder();
  let retArr = [];
  let HT = new HashTable(tree1Arr.length + tree2Arr.length);

  //add the first array to the hash table
  for (let i = 0; i < tree1Arr.length; i++) {
    HT.add(tree1Arr[i], 1);
  }
  // check for repeated values
  for (let i = 0; i < tree2Arr.length; i++) {
    if (HT.contain(tree2Arr[i])) {
      // let llIndex = HT.storage[HT.hash(tree2Arr[i])];
      // 1 refers to the first array
      //no need to add the values of the second tree to the table
      if(!retArr.includes(tree2Arr[i])){
        retArr.push(tree2Arr[i]);
      }
    }
  }
  return retArr;
}



module.exports = treeInsertion;
