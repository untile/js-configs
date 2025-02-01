// Rule: consistent-this correct usage

// Example 1: Using 'self' to store 'this' reference
function Counter() {
  const self = this;

  self.count = 0;

  setInterval(() => {
    self.count++;
  }, 1000);
}

Object.freeze({ Counter });
