// Rule: no-path-concat correct usage

// Example 1: Correct usage of path.join() for path concatenation
const path = require('path');
const fullPath = path.join(__dirname, 'file.txt');

noop(fullPath);
