'use strict';

function selectionSort(arr){
  let min;
  let temp;
  for (let i = 0; i < arr.length-1; i++) {
    min = i;
    for (let j = i+1; j < arr.length; j++) {
      if(arr[j]<arr[min]){
        min = j;
      }
    }
    temp = arr[min];
    arr[min]=arr[i];
    arr[i]=temp;
  }
  return arr;
}

module.exports=selectionSort;
