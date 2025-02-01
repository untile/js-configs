// Rule: no-return-assign incorrect usage

// Example 1: Incorrect usage of return statement with assignment
function add(num1, num2) {
  return num3 = num1 + num2;
}

noop(add(1, 2));
