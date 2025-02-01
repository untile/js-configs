// Rule: security/detect-non-literal-regexp correct usage

// Example 1: Using a literal regular expression pattern for safe string matching
const pattern = /^[a-zA-Z0-9]+$/;
const userInput = 'test123';

if (pattern.test(userInput)) {
  noop('Input is alphanumeric');
}
