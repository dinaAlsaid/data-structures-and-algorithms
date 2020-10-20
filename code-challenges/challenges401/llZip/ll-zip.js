"use strict";

const ll = require("../../../javascript/Data-structures/linkedList/linked-list.js");

function llZip(ll1, ll2) {
  let newll = new ll();
  if (!ll1.head && !ll2.head) {
    return "exception";
  } else if (!ll1.head) {
    //ll1 is probably empty
    newll.head = ll2.head;
    return newll.head;
  } else if (!ll2.head) {
    //ll2 is probably empty
    newll = ll1.head;
    return newll.head;
  } else {
    let current;

    newll.head = ll1.head;
    current = ll1.head.next;
    ll2.head.next = ll1.head.next;
    ll1.head.next = ll2.head;

    


  }
}
