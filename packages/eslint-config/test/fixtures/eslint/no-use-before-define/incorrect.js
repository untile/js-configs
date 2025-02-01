// Rule: no-use-before-define incorrect usage

// Example 1: Incorrect usage of a variable before it is defined
const num2 = num + 10;
const num = 1;

noop(num, num2);
