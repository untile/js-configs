// Rule: security/detect-unsafe-regex correct usage

// Example 1: Using a safe regular expression pattern with reasonable complexity
const safePattern = /^[a-zA-Z0-9]{1,32}$/;
const input = 'Test123';
const isValid = safePattern.test(input);

noop(isValid);
