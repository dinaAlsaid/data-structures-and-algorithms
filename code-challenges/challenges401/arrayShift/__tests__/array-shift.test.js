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

