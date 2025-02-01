// Rule: padding-line-between-statements incorrect usage

// Example 1: Missing blank line after multiline expression
const sum = 1 +
  2 +
  3;
noop(sum);

// Example 2: Missing blank line before block statement
const value = Math.random();
if (value > 0.5) {
  noop('high');
}

// Example 3: Missing blank line after multiline block
function complexFunction() {
  const num1 = 1;
  const num2 = 2;

  return num1 + num2;
}
const result = complexFunction();

noop(result);

// Example 4: Unnecessary blank line between consecutive variable declarations
const num = 1;

const num2 = 2;

const num3 = 3;

noop(num, num2, num3);
