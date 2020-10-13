'use strict';
function binarySearch(arr,key){
    let iFirst = 0;
    let iLast = arr.length-1;
    let mid = Math.ceil((iLast-iFirst)/2);

    while(iLast >= iFirst){
        if (key == arr[mid]){
            return key;
        }else if(key < arr[mid]){
            iLast= mid-1;
        }else if (key > arr[mid]){
            iFirst = mid +1;
        } 
        mid =iFirst+ Math.ceil((iLast-iFirst)/2)

    }
    return -1;
}

module.exports = binarySearch;