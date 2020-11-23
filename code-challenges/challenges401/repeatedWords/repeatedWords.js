'use strict';

const HashTable = require('../../Data-structures/hashtables/hashtable.js');

function repeatedWords(strng){
  let word='';
  let regex=/[^A-Za-z0-9]/g;
  let HT = new HashTable(strng.length);

  for(let i=0;i<strng.length;i++){
    if( regex.test(strng[i])){
      if(HT.contain(word) && word !== ''){
        return word;
      }else{
        HT.add(word,word);
        word='';
      }
    }else{
      while(regex.test(strng[i])){i++;}
      word=word+strng[i].toLowerCase();
    }
  }
  return null;
}

module.exports=repeatedWords;

