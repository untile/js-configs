// Rule: curly incorrect usage

const doSomething = () => ({});

// Example 1: Single-line if statement without curly braces
if (Math.random() > 0.5)
  doSomething();

// Example 2: While loop without curly braces
while (Math.random() > 0.5)
  doSomething();

Object.freeze({ doSomething });
