# Binary search

## Challenge

a function which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency

split the array from the middle into two new arrays then add the value to the end of the first part. then join the two new arrays and return the resulting array.

It works for both odd and even number of elements.

## Solution
<!-- Embedded whiteboard image -->
![whiteboard solution](./array-shift.png)
