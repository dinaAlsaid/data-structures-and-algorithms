"use strict";

const arrayShift = require("../array-shift.js");

describe("insert shift Array ", () => {
  it("Should add value in the middle for an even number of elements", () => {
    expect(arrayShift([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
  });
});
describe("insert shift Array ", () => {
  it("Should add value in the middle for an odd number of elements", () => {
    expect(arrayShift([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
  });
});
describe("when the passed array has one element ", () => {
  it("Should return an array of two elements", () => {
    expect(arrayShift([1], 16)).toEqual([1,16]);
  });
});

describe("when the passed array is empty ", () => {
  it("Should return an array of the passed value", () => {
    expect(arrayShift([], 16)).toEqual([16]);
  });
});
