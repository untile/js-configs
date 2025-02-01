// Rule: no-self-compare incorrect usage

// Example 1: Incorrect usage of self-comparison
const num1 = 1;
const num2 = 2;

if (num1 === num1) {
  noop(num2);
}
