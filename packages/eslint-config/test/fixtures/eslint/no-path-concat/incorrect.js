/* eslint-disable prefer-template */
// Rule: no-path-concat incorrect usage

// Example 1: Incorrect usage of string concatenation for paths
const fullPath = __dirname + '/file.txt';

noop(fullPath);
