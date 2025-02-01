// Rule: no-bitwise correct usage

// Example 1: Using logical operators instead of bitwise operators
const num1 = 1;
const num2 = 2;
const num3 = Boolean(num1) && Boolean(num2);

noop(num3);
