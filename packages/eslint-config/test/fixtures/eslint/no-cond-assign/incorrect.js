// Rule: no-cond-assign incorrect usage

// Example 1: Using assignment operator in condition
const num1 = 0;
const num2 = 1;

if (num2 = num1) {
  noop(num2);
}
