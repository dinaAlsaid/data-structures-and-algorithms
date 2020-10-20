# linked list zip

takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list.

## Challenge

A function which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. utilizing methods and properties from the linked list class (../javascript/data-structures/linkedList.js)

## Approach & Efficiency

Iterate over the array starting from the last item and moving to the first, and pushing elements one by one to the a new empty array.
This solution is the easiest logically but it uses up twice the space and it takes a long time for longer arrays.

## Solution
<!-- Embedded whiteboard image -->
![whiteboard solution](./llzip.PNG)
