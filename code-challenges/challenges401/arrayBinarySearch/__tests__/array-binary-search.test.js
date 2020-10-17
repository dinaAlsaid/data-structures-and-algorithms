'use strict';

const binarySearch = require('../array-binary-search.js');

// pass case
describe('Binary serach ', () => {
  it('Should return the key when found', () => {
    expect(binarySearch([2, 4, 6, 8], 8)).toEqual(3);
  });
});

//fail case
describe('Binary serach ', () => {
  it('Should return -1 when key not found', () => {
    expect(binarySearch([2, 4, 6, 8], 9)).toEqual(-1);
  });
});

// special cases
describe('edge cases ', () => {
  it('Should return -1 for empty array', () => {
    expect(binarySearch([], 9)).toEqual(-1);
  });
});


