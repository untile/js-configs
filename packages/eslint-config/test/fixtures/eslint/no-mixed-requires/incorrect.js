/* eslint-disable one-var */
// Rule: no-mixed-requires incorrect usage

// Example 1: Using require and import in the same file
const fs = require('fs'),
  num = 1;

noop(fs);
noop(num);
