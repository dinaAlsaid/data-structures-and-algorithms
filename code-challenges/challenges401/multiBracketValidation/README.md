# Multi Bracket validator

A function that validates if the brackets in a string ar balanced or not.

## Challenge

write a function that takes a string and validates if this string has balanced brackets. if they are balanced return true if not return false

## Approach & Efficiency

create a function that uses a stack. The function will convert the string into an array of characters then loop through it. if it finds an opening bracket of any type it will push the closing bracket of the same type to the stack. if it finds a closing bracket it will compare it with the value at the top of the stack, if it matches it pops it out. if at the end the stack is empty the brackets are balanced.

Time Efficiency  is O(n)

## Solution
<!-- Embedded whiteboard image -->
![whiteboard solution](./multi-bracket-validator.jpg)
