// Rule: n/no-deprecated-api incorrect usage

// Example 1: Incorrect usage of a deprecated Node.js API
const invalidApiUsage = () => {
  const fs = require('fs');
  fs.exists('path/to/file.txt', exists => {
    if (exists) {
      noop('File exists.');
    }
  });
};

invalidApiUsage();

