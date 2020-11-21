'use strict';

let Hashtable = require('../hashtables/hashtable.js');
const LinkedList = require('../linkedList/linked-list.js');

describe('hashtable',()=>{
  it('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
    let HT = new Hashtable(1);
    HT.add('laugh','haha');
    expect(HT.storage[0] instanceof LinkedList).toBeTruthy();
    expect(HT.storage[0].head.value['laugh']).toEqual('haha');
  });
  it('Retrieving based on a key returns the value stored',()=>{
    let HT = new Hashtable(1);
    HT.add('laugh','haha');
    expect(HT.get('laugh')).toEqual('haha');
  });
  it('Successfully returns null for a key that does not exist in the hashtable',()=>{
    let HT = new Hashtable(1);
    HT.add('laugh','haha');
    expect(HT.get('frown')).toBeNull();
  });
  it('Successfully handle a collision within the hashtable',()=>{
    let HT = new Hashtable(1);
    HT.add('dina','girl');
    HT.add('dani','boy');
    expect(HT.storage[0].head.value['dani']).toEqual('boy');
    expect(HT.storage[0].head.next.value['dina']).toEqual('girl');

  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let HT = new Hashtable(1);
    HT.add('dina','girl');
    HT.add('dani','boy');
    expect(HT.get('dani')).toEqual('boy');
  });
  it('Successfully hash a key to an in-range value',()=>{
    let HT = new Hashtable(5);
    expect(HT.hash('key')).toBeLessThan(5);
  });

});
