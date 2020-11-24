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
    const tree1 = new BinaryTree.BinaryTree();
    tree1.add('root');
    tree1.add(4);
    tree1.add(3);
    tree1.add(2);
    expect(tree1.root.value).toEqual('root');
    expect(tree1.root.right).toBeDefined();
    expect(tree1.root.left).toBeDefined();
  });
  
  it('Can successfully return a collection from a preorder traversal',()=>{
    tree.add('root');
    tree.add(4);
    tree.add(3);
    tree.add(2);
    expect(tree.preOrder()).toEqual(['root',4,2,3]);

  });
  it('Can successfully return a collection from an inorder traversal',()=>{
    expect(tree.inOrder()).toEqual([2,4,'root',3]);

  });
  it('Can successfully return a collection from a postorder traversal',()=>{
    expect(tree.postOrder()).toEqual([2,4,3,'root']);

  });


});

