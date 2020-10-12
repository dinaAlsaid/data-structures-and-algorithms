'use strict';
function insertShiftArray(arr,n){
    let middle= Math.ceil(arr.length/2)
    let arr1=[];
    let arr2=[];
    for (let i = 0; i < middle; i++) {
        arr1.push(arr[i]);
    }
    for (let j = middle; j < arr.length; j++) {
        arr2.push(arr[j]) ;
    }
    arr1.push(n);

    return [...arr1, ...arr2];
}

module.exports = insertShiftArray;