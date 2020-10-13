'use strict';
function binarySearch(arr,key){
    let iFirst = 0;
    let iLast = arr.length;
    let mid = Math.ceil((iLast-iFirst)/2);
    
    while((iLast-iFirst) !== 0){
        if (key == arr[mid]){
            return key;
        }else if(key <= arr[mid-1]){
            iLast=mid-1;
        }else if (key >= arr[mid+1]){
            iFirst = mid +1;
        } else {
            return -1;
        }
        mid = Math.ceil((iLast-iFirst)/2)
    }
}

module.exports = binarySearch;