// Rule: security/detect-non-literal-regexp incorrect usage

// Example 1: Using a variable-based pattern for RegExp which could lead to ReDoS attacks
const userInput = process.argv[2];
const pattern = new RegExp(userInput);
const testString = 'test123';

if (pattern.test(testString)) {
  noop('Pattern matched');
}
