'use strict';

const quick = require('../quick.js');

describe('Selection sorting algorithm', () => {
  it('returns a sorted array', () => {
    expect(quick([8, 4, 23, 42, 16, 15],0,5)).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('returns an array of one element',()=>{
    expect(quick([8],1,1)).toEqual([8]);

  });
  it('handles an empty array for an input',()=>{
    expect(quick([],0,0)).toEqual([]);

  });

});
