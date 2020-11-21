'use strict';

let tree = require('../findMaxBinaryTree.js');



describe('Find max in binary tree',()=>{
  it('returns an exception when a tree is empty',()=>{
    expect(tree.findMaximumValue()).toBe('empty tree no max');
  });
  it('returns the maximum value in a tree',()=>{
    tree.add(3);
    tree.add(2);
    tree.add(10);
    expect(tree.findMaximumValue()).toEqual(10);
  })
})