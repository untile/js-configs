// Rule: n/no-deprecated-api correct usage

// Example 1: Correct usage of a deprecated Node.js API (using a workaround)
const validApiUsage = () => {
  const fs = require('fs');
  fs.existsSync('path/to/file.txt', exists => {
    if (exists) {
      noop('File exists.');
    }
  });
};

validApiUsage();

