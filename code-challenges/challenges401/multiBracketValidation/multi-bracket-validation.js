'use strict';

const SandQ = require('../../Data-structures/stacksAndQueues/stacks-and-queues.js');

function multiBracketValidation(input){
  let stack= new SandQ.stack();
  let charArr= input.split('');
  let flag=1;
  charArr.forEach(char => {
    switch(char){
      case '{':
        stack.push('}');
        break;
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case ')':
      case '}':
      case ']':
        if(char === stack.peek() ){
          stack.pop();
        }else if(stack.peek() === 'empty'){
          flag=0;
        }
        break;
      default:
        break;
    }
    
  });
  if(stack.isEmpty() && flag === 1){
    return true;
  }else{
    return false
  }
}

module.exports= multiBracketValidation;