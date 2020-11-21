"use strict";

const SandQ = require("../../Data-structures/stacksAndQueues/stacks-and-queues");

class dog {
  constructor(name) {
    this.name = name;
  }
}
class cat {
  constructor(name) {
    this.name = name;
  }
}
class AnimalShelter {
  constructor() {
    this.catQ = new SandQ.Queue();
    this.dogQ = new SandQ.Queue();
  }
  enqueue(animal) {
    if (animal instanceof cat) {
      this.catQ.enqueue(animal);
    } else if (animal instanceof dog) {
      this.dogQ.enqueue(animal);
    }
  }
  dequeue(pref) {
    if (pref === "cat") {
      return this.catQ.dequeue();
    } else if (pref === "dog") {
      return this.dogQ.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = { AnimalShelter, cat, dog };
