// Rule: security/detect-unsafe-regex incorrect usage

// Example 1: Using a potentially catastrophic regex pattern with nested quantifiers that could cause ReDoS
const dangerousPattern = /^(a+)*$/;
const isValid = dangerousPattern.test('aaaaaaaaaaaaaaaaaa');

noop(isValid);
