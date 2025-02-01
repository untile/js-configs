// Rule: security/detect-non-literal-require incorrect usage

// Example 1: Using a variable-based path in require() which could lead to arbitrary code execution
const userInput = process.argv[2];
const dynamicModule = require(userInput);

noop(dynamicModule);
