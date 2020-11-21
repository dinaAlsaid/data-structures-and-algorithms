'use strict';

// const ll = require('../../../javascript/Data-structures/linkedList/linked-list.js');

function llZip(ll1, ll2) {
  if (!ll1.head && !ll2.head){
    return 'exception';
  }else if(!ll1.head){
    return ll2.head;
  }else if(!ll2.head){
    return ll1.head;
  }else{
    let current1 = ll1.head.next;
    let current2 = ll2.head.next;

    let newllhead = ll1.head;
    ll1.head.next = ll2.head;

    if(current1 && current2){
      current1.next = current2;

    }

  }
}

module.exports=llZip;
