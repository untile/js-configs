// Rule: padding-line-between-statements correct usage

// Example 1: No blank line required between consecutive variable declarations
const foo = 1;
const bar = 2;
const baz = 3;

noop(foo, bar, baz);

// Example 2: Blank line required after multiline expression
const sum = 1 +
  2 +
  3;

noop(sum);

// Example 3: Blank line required before block statement
const value = Math.random();

if (value > 0.5) {
  noop('high');
}

// Example 4: Blank line required after multiline block
function complexFunction() {
  const num1 = 1;
  const num2 = 2;

  return num1 + num2;
}

const result = complexFunction();

noop(result);
