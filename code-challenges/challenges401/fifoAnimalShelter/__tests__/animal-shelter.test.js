"use strict";

const animals = require("../fifoAnimalshelter.js");

let shelter = new animals.AnimalShelter();
let cat = new animals.cat("3asal");
let dog = new animals.dog("3antar");

describe("enqueue(animal)", () => {
  it("to not admit a mouse to the shelter", () => {
    let mouse = { name: "jerry" };
    shelter.enqueue(mouse);
    expect(shelter.catQ.front).toBeNull();
    expect(shelter.dogQ.front).toBeNull();
  });
  it("admit a cat to the shelter", () => {
    shelter.enqueue(cat);
    expect(shelter.catQ.front.value).toEqual(cat);
  });
  it("admit a cat to the shelter", () => {
    shelter.enqueue(dog);
    expect(shelter.dogQ.front.value).toEqual(dog);
  });
});

describe("dequeue(pref)", () => {
  it("to deqeue based on preference", () => {
    expect(shelter.dequeue("cat")).toEqual(cat);
    expect(shelter.dequeue("dog")).toEqual(dog);
  });
  it("return null when pref is not cat or dog", () => {
    expect(shelter.dequeue("mouse")).toBeNull();
  });
});
