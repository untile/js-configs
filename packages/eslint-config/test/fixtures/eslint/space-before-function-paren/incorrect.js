// Rule: space-before-function-paren incorrect usage

// Example 1: Missing space before function parentheses
function greet (name) {
  return `Hello ${name}!`;
}

function multiply (num1, num2) {
  return num1 * num2;
}

const arrowFunc = num => num * 2;

noop(greet, multiply, arrowFunc);
