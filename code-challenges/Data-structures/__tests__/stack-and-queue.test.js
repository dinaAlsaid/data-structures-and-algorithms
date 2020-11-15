"use strict";

const SandQ = require("../stacksAndQueues/stacks-and-queues");
/*important note */
/* the sequece of the tests matter , please don't skip any */
/* i ran all the tests on the same stack instance for conveneince */

describe("Stack", () => {
  let newStack = new SandQ.Stack();
  it("Can successfully instantiate an empty stack", () => {
    // check if the created stack is in the correct format
    expect(newStack.isEmpty()).toBe(true);
  });
  it("Can successfully push onto a stack when stack is empty", () => {
    let expected = {
      top: {
        value: 5,
        next: null,
      },
    };
    // push a new node to the already existing stack
    newStack.push(5);
    expect(newStack).toEqual(expected);
  });
  it("Can successfully push multiple values onto a stack", () => {
    let expected = {
      top: {
        value: 4,
        next: {
          value: 5,
          next: null,
        },
      },
    };
    // push another new node to the already existing stack

    newStack.push(4);
    expect(newStack).toEqual(expected);
  });
  it("Can successfully pop off the stack", () => {
    let expected = {
      top: {
        value: 5,
        next: null,
      },
    };
    // pop  from the already existing stack

    expect(newStack.pop()).toEqual(4);
    expect(newStack).toEqual(expected);
  });
  it("Can successfully peek the next item on the stack", () => {
    expect(newStack.peek()).toEqual(5);
  });

  it("Can successfully empty a stack after multiple pops", () => {
    let expected = {
      top: null,
    };
    // pop the last element in the already existing stack
    newStack.pop();
    expect(newStack).toEqual(expected);
  });
  it("Calling pop or peek on empty stack raises exception", () => {
    // now the stack is empty
    expect(newStack.pop()).toEqual("empty");
    expect(newStack.peek()).toEqual("empty");
  });
});

//--------------------------------Queue------------------------------------//

describe("Queue", () => {
  let newQueue = new SandQ.queue();
  it("Can successfully instantiate an empty queue", () => {
    expect(newQueue.front).toBeNull();
    expect(newQueue.rear).toBeNull();
    expect(newQueue.isEmpty()).toBe(true);
  });

  it("Can successfully enqueue into a queue", () => {
    let expected = {
      front: {
        value: 5,
        next: null,
      },
      rear: {
        value: 5,
        next: null,
      },
    };
    newQueue.enqueue(5);
    expect(newQueue).toEqual(expected);
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    let expected = {
      front: {
        value: 5,
        next: {
          value: 4,
          next: null,
        },
      },
      rear: {
        value: 4,
        next: null,
      },
    };
    newQueue.enqueue(4);
    expect(newQueue).toEqual(expected);
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    let expected = {
      front: {
        value: 4,
        next: null,
      },
      rear: {
        value: 4,
        next: null,
      },
    };

    expect(newQueue.dequeue()).toEqual(5);
    expect(newQueue).toEqual(expected);
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    expect(newQueue.peek()).toEqual(4);
  });

  it("Can successfully empty a stack after multiple pops", () => {
    let expected = {
      front: null,
      rear:null,
    };
    newQueue.dequeue();
    console.log(newQueue);
    expect(newQueue).toEqual(expected);
  });
  it("Calling dequeue or peek on empty queue raises exception", () => {
    expect(newQueue.dequeue()).toEqual("empty");
    expect(newQueue.peek()).toEqual("empty");
  });
});
