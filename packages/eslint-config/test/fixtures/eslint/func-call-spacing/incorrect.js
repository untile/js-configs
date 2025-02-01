// Rule: func-call-spacing incorrect usage

// Example 1: No space between function name and parentheses
function greet(name) {
  return `Hello ${name}!`;
}

greet ('World');

// Example 2: Immediately invoked function expression without space
(function() {
  const result = 42;
  Object.freeze({ result });
}) ();
