"use strict";

const ll = require("../linkedList/linked-list.js");

describe("Linked lists methods", () => {
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
    const val = ll1.includes("a");
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
