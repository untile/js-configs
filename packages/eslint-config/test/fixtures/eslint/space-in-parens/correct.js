// Rule: space-in-parens correct usage

// Example 1: No spaces inside parentheses
function greet(name) {
  return `Hello ${name}!`;
}

const multiply = (num, num2) => num * num2;

if (Math.random() > 0.5) {
  noop(greet('world'), multiply(2, 3));
}
