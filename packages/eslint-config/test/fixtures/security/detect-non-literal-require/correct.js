// Rule: security/detect-non-literal-require correct usage

// Example 1: Using a literal string in require() for safe module loading
const path = require('path');

noop(path);
