// Rule: space-before-function-paren correct usage

// Example 1: Consistent spacing before function parentheses
function greet(name) {
  return `Hello ${name}!`;
}

function multiply(num1, num2) {
  return num1 * num2;
}

const arrowFunc = num => num * 2;

noop(greet, multiply, arrowFunc);
