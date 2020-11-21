'use strict';

const psuedoQ = require('../queue-with-stacks.js');

describe('Psuedo Queue',()=>{
  const newQ = new psuedoQ();
  it('creates an empty Queue',()=>{
    expect(newQ.front).toBeNull();
    expect(newQ.rear).toBeNull();
  });
  it('can enqueue() to an empty queue',()=>{
    newQ.enqueue(5);
    expect(newQ.front.value).toEqual(5);
  });
  it('can enqueue() multiple times correctly',()=>{
    newQ.enqueue(4);
    expect(newQ.front.value).toEqual(5);
    expect(newQ.rear.value).toEqual(4);
  });
  it('can dequeue correctly',()=>{
    expect(newQ.dequeue()).toEqual(5);
    expect(newQ.front.value).toEqual(4);
  })
  it('can dequeue all the nodes',()=>{
    expect(newQ.dequeue()).toEqual(4);
    console.log(newQ)
    expect(newQ.front).toBeNull();
  })
  it('returns empty if dequeue on empty queue',()=>{
    expect(newQ.dequeue()).toEqual('empty');
  })


})