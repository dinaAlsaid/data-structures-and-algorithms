"use strict";

const ll = require("../linkedList/linked-list.js");
describe("Linked lists basic methods", () => {
  it("instantiate an empty linked list", () => {
    const ll1 = new ll();
    expect(ll1.head).toBeNull();
  });

  it("insert into the linked list", () => {
    const ll1 = new ll();
    const node1 = ll1.insert("a");
    expect(node1.next).toBeNull();
    expect(node1.value).toEqual("a");
    expect(ll1.head).not.toBeNull();
  });
  it("The head property will properly point to the first node in the linked list", () => {
    const ll1 = new ll();
    const node1 = ll1.insert("a");
    expect(ll1.head).toEqual(node1);
  });
  it("Can properly insert multiple nodes into the linked list", () => {
    const ll1 = new ll();
    ll1.insert("b");
    ll1.insert("d");
    ll1.insert("c");
    let expected = {
      head: {
        value: "b",
        next: {
          value: "d",
          next: {
            value: "c",
            next: null,
          },
        },
      },
    };
    expect(ll1).toEqual(expected);
  });
  it("return true when finding a value within the linked list that exists", () => {
    const ll1 = new ll();
    ll1.insert("b");
    ll1.insert("a");
    ll1.insert("c");
    const val = ll1.includes("c");
    expect(val).toEqual(true);
  });
  it("Will return false when searching for a value in the linked list that does not exist", () => {
    const ll1 = new ll();
    ll1.insert("b");
    ll1.insert("d");
    ll1.insert("c");
    const val = ll1.includes("a");
    expect(val).toEqual(false);
  });
  it("Can properly return a collection of all the values that exist in the linked list", () => {
    const ll1 = new ll();
    ll1.insert("b");
    ll1.insert("d");
    ll1.insert("c");
    const val = ll1.toString();
    expect(val).toEqual("{b}=>{d}=>{c}=> NULL");
  });
});
describe("Linked lists append method", () => {
  const ll1 = new ll();
  const node1 = ll1.append("a");

  it("appends a new node to the end of the linked list", () => {
    expect(node1.next).toBeNull();
    expect(node1.value).toEqual("a");
    expect(ll1.head).not.toBeNull();
  });
  it("appends multiple of nodes successfully", () => {
    let expected = {
      head: {
        value: "a",
        next: {
          value: "b",
          next: null,
        },
      },
    };

    ll1.append("b");
    expect(ll1).toEqual(expected);
  });
});
describe('Linked lists insertBefore method',()=>{
  it('Can successfully insert a node before a node located in the middle of a linked list',()=>{
    const ll1 = new ll();
    ll1.append("a");
    ll1.append("b");
    ll1.append("c");
  
    let node = ll1.insertBefore('c','added');
    let expected = {
      head: {
        value: "a",
        next: {
          value: "b",
          next: {
            value: "added",
            next: {
              value: "c",
              next: null,
  
            }
          },
        },
      },
    };
    // console.log("node", node ,"\n expected", expected);
    console.log(ll1.includes("c"));

    expect(node).toEqual(expected);
  })
  it('Can successfully insert a node before the first node of a linked list',()=>{
    const ll1 = new ll();
    ll1.append("a");
    ll1.append("b");
    ll1.append("c");
  
    let node = ll1.insertBefore('a','added');
    let expected = {
      head: {
        value: "added",
        next: {
          value: "a",
          next: {
            value: "b",
            next: {
              value: "c",
              next: null,
  
            }
          },
        },
      },
    };
    expect(node).toEqual(expected);
  })

})
describe("Linked lists insertAfter method",()=>{
  it('Can successfully insert after a node in the middle of the linked list',()=>{
    const ll1 = new ll();
    ll1.append("a");
    ll1.append("b");
    ll1.append("c");
  
    let node = ll1.insertAfter('b','added');
    let expected = {
      head: {
        value: "a",
        next: {
          value: "b",
          next: {
            value: "added",
            next: {
              value: "c",
              next: null,
  
            }
          },
        },
      },
    };
    expect(node).toEqual(expected);

  })
  it('Can successfully insert a node after the last node of the linked list',()=>{
    const ll1 = new ll();
    ll1.append("a");
    ll1.append("b");
    ll1.append("c");
  
    let node = ll1.insertAfter('c','added');
    let expected = {
      head: {
        value: "a",
        next: {
          value: "b",
          next: {
            value: "c",
            next: {
              value: "added",
              next: null,
  
            }
          },
        },
      },
    };
    expect(node).toEqual(expected);

  })

})
describe('linked lists returnFromTheEnd method',()=>{
  const ll1 = new ll();
  ll1.append("a");
  ll1.append("b");
  ll1.append("c");
  it('if k is not positive return an exception',()=>{
    let kthVal = ll1.returnFromTheEnd(-2);
    expect(kthVal).toEqual('exception');
  });
  it('if k is larger than the linked list length return an exception',()=>{
    let kthVal = ll1.returnFromTheEnd(4);
    expect(kthVal).toEqual('exception');
  });
  it('k and the length of the list are the same',()=>{
    let kthVal = ll1.returnFromTheEnd(2);
    expect(kthVal).toEqual('a');
  });
  it('k is not at the end, but somewhere in the middle of the linked list',()=>{
    let kthVal = ll1.returnFromTheEnd(1);
    expect(kthVal).toEqual('b');
  });
  it('the linked list is of a size 1',()=>{
    let ll2 = new ll();
    ll2.append("a");
    let kthVal = ll2.returnFromTheEnd(0);
    expect(kthVal).toEqual('a');
  });


})