'use strict';

const MBV = require('../multi-bracket-validation.js');

describe('Multi Bracket Validator',()=>{
  it('returns true when brackets are balanced',()=>{
    expect(MBV('{}')).toBeTruthy();
    expect(MBV('{}(){}')).toBeTruthy();
    expect(MBV('()[[Extra Characters]]')).toBeTruthy();
    expect(MBV('(){}[[]]')).toBeTruthy();
    expect(MBV('{}{Code}[Fellows](())')).toBeTruthy();
  });
  it('returns false when brackets are not balanced',()=>{
    expect(MBV('[({}]')).toBeFalsy();
    expect(MBV('(](')).toBeFalsy();
    expect(MBV('{(})')).toBeFalsy();
    expect(MBV('[}')).toBeFalsy();
    expect(MBV('[')).toBeFalsy();
  })
  it('returns false if only closing brackets', ()=>{
    expect(MBV(')')).toBeFalsy();

  })
})