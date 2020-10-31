'use strict';

const BinaryTree = require('../tree/tree.js');

describe('Binary Tree',()=>{
  const tree = new BinaryTree.BinaryTree();
  it('Can successfully instantiate an empty tree',()=>{
    expect(tree.root).toEqual(null);
  });
  it('Can successfully instantiate a tree with a single root node',()=>{
    expect(tree.root).toBeDefined();

  });
  it('Can successfully add a left child and right child to a single root node',()=>{
    const BST = new BinaryTree.BinarySearchTree(tree);
    BST.add('root');
    expect(tree.root.value).toEqual('root');
    expect(tree.root.right).toBeDefined();
    expect(tree.root.left).toBeDefined();
    BST.add(4);
    BST.add(3);
    BST.add(2);
  });
  
  it('Can successfully return a collection from a preorder traversal',()=>{
    expect(tree.preOrder()).toEqual(['root',4,2,3]);

  });
  it('Can successfully return a collection from an inorder traversal',()=>{
    expect(tree.inOrder()).toEqual([2,4,'root',3]);

  });
  it('Can successfully return a collection from a postorder traversal',()=>{
    expect(tree.postOrder()).toEqual([2,4,3,'root']);

  });


})
