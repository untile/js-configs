// Rule: consistent-this incorrect usage

// Example 1: Using 'that' instead of 'self' to store 'this' reference
function Counter() {
  const that = this;

  that.count = 0;

  setInterval(() => {
    that.count++;
  }, 1000);
}

Object.freeze({ Counter });
