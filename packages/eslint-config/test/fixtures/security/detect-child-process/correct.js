// Rule: security/detect-child-process correct usage

// Example 1: Using child_process with explicit paths rather than shell commands
const { execFile } = require('child_process');

execFile('/usr/local/bin/node', ['script.js'], (error, stdout) => {
  if (error) {
    noop('Error:', error);

    return;
  }

  noop('Output:', stdout);
});
