// Rule: no-return-assign correct usage

// Example 1: Correct usage of return statement without assignment
function add(num1, num2) {
  return num1 + num2;
}

noop(add(1, 2));
