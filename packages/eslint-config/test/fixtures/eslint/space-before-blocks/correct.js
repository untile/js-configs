// Rule: space-before-blocks correct usage

// Example 1: Consistent spacing before blocks
function greet(name) {
  return `Hello ${name}!`;
}

if (Math.random() > 0.5) {
  noop();
}

const multiply = (num1, num2) => {
  return num1 * num2;
};

try {
  noop();
} catch (error) {
  noop(error);
}

noop(greet, multiply);
