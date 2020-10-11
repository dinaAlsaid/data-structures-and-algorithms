'use strict';

function arrayReverse (arr){
    let newArr = [];
    for (let i = arr.length; i >=0 ; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}