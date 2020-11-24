'use strict';

const {BinaryTree} = require('../../../Data-structures/tree/tree.js');
const treeInsertion = require('../tree-insertion.js');

const BT1 = new BinaryTree();
const BT2 = new BinaryTree();
const BT3 = new BinaryTree();

// add values to the binary tree
BT1.add(1);
BT1.add(3);
BT1.add(2);
BT1.add(5);
BT1.add(5);

BT2.add(6);
BT2.add(3);
BT2.add(4);
BT2.add(5);

describe('tree insertion function',()=>{
  it('returns the repeated values',()=>{
    expect(treeInsertion(BT1,BT2)).toEqual([3,5]);
  });
  it('handles empty tree inputs',()=>{
    expect(treeInsertion(BT3,BT2)).toEqual([]);
    expect(treeInsertion(BT1,BT3)).toEqual([]);
    expect(treeInsertion(BT3,BT3)).toEqual([]);
  });
  it('doesn\'t add the value twice',()=>{
    BT2.add(5);
    expect(treeInsertion(BT1,BT2)).toEqual([3,5]);
  });


});
