'use strict';

function insertionSort(arr){
  let temp;
  let j;
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i];
    j= i-1;
    while(j>=0 && temp <arr[j]){
      arr[j+1]=arr[j];
      j=j-1;
    }
    arr[j+1]=temp;
  }
  return arr
}

module.exports = insertionSort;
