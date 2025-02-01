// Rule: security/detect-non-literal-fs-filename correct usage

// Example 1: Using a literal string for fs.readFileSync to ensure safe file access
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');
const data = fs.readFileSync(filePath, 'utf8');

noop(data);
