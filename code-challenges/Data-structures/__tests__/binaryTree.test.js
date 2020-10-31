'use strict';

const BinaryTree = require('../tree/tree.js');

describe('Binary Tree',()=>{
  const tree = new BinaryTree.BinaryTree();
  it('Can successfully instantiate an empty tree',()=>{
    expect(tree.root).toEqual(null);
  })
})
