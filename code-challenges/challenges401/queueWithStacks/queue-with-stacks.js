'use strict';

const SandQ = require('../../Data-structures/stacksAndQueues/stacks-and-queues;');

class PsuedoQueue{
  constructor(){
    this.front = null;
    this.rear =null;
    this.stack1 = new SandQ.stack();
    this.stack2 = new SandQ.stack();
  }

  enqueue(val){
    if(!this.stack1.top){
      this.front=this.stack1.top;
    }
    this.stack1.push(val);
    this.rear = this.stack1.top; 
  }

  dequeue(){
    if(this.stack1.peek() === 'empty'){
      return 'empty';
    }else{
      while(this.stack1.top.next){
        this.stack2.push(this.stack1.pop());
      }
      let temp = this.stack1.pop();
      while(this.stack2.top){
        this.stack1.push(this.stack2.pop());
      }
      return temp;
    }
  }
}

module.exports=PsuedoQueue;