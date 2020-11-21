'use strict';

function quickSort(arr, left, right) {
  if(arr.length <= 1){
    return arr;
  }else{
    if (left < right) {
      let position = partition(arr, left, right);
      quickSort(arr, left, position - 1);
      quickSort(arr, position + 1, right);
    }
    return arr;
  }
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let lower = left - 1;
  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      lower += 1;
      swap(arr, i, lower);
    }
  }
  swap(arr, right, lower + 1);
  return lower + 1;
}

function swap(arr, i, low) {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;

}

module.exports=quickSort;
