'use strict';

function mergeSort(arr) {
  let mid = arr.length / 2;
  let leftArr = [];
  let rightArr = [];
  if(arr.length===0){
    return 'empty';
  }else{
    if(arr.length >1){
      for (let i = 0; i < arr.length; i++) {
        if (i < mid) leftArr.push(arr[i]);
        if (i >= mid) rightArr.push(arr[i]);
      }
      console.log(leftArr);
      mergeSort(leftArr);
      mergeSort(rightArr);
      merge(leftArr, rightArr, arr);

    }
  }
  return arr;
}

function merge(leftArr, rightArr, arr) {
  let i =0, j =0, k = 0;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i += 1;
    } else {
      arr[k] = rightArr[j];
      j += 1;
    }
    k += 1;
  }
  if (i === leftArr.length) {
    while(j<rightArr.length){
      arr[k] = rightArr[j];
      j += 1;
      k += 1;
    }
  } else {
    while(i<leftArr.length){
      arr[k] = leftArr[i];
      i += 1;
      k += 1;
    }

  }
}

module.exports = mergeSort;
