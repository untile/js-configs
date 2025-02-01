// Rule: security/detect-child-process incorrect usage

// Example 1: Using child_process.exec with shell commands which can be dangerous due to command injection
const { exec } = require('child_process');

exec(`ls ${userInput}`, (error, stdout) => {
  if (error) {
    noop('Error:', error);

    return;
  }

  noop('Output:', stdout);
});
