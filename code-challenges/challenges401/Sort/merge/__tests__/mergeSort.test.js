'use strict';

const mergeSort = require('../merge.js');

describe('Selection sorting algorithm', () => {
  it('returns a sorted array', () => {
    expect(mergeSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('returns an array of one element',()=>{
    expect(mergeSort([8])).toEqual([8]);

  });
  it('handles an empty array for an input',()=>{
    expect(mergeSort([])).toEqual('empty');

  });

});
