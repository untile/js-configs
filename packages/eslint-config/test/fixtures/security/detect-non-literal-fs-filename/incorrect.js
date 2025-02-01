// Rule: security/detect-non-literal-fs-filename incorrect usage

// Example 1: Using a variable from user input for fs.readFileSync which could lead to path traversal
const fs = require('fs');

const userProvidedPath = process.argv[2];
const data = fs.readFileSync(userProvidedPath);

noop(data);
