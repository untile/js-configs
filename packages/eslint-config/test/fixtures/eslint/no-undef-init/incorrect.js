/* eslint-disable no-undefined */
// Rule: no-undef-init incorrect usage

// Example 1: Incorrectly initializing variables with undefined
let num = undefined;
const age = undefined;
num = undefined;

noop(num, age);
