/* eslint-disable no-unused-expressions */
// Rule: no-sequences incorrect usage

// Example 1: Incorrect usage of sequences
let num1 = (1, 2);
let num2 = 5;
num1 = num2 += 5, num1 + num2;

noop(num1, num2);
