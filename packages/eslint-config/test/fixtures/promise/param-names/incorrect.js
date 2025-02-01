// Rule: promise/param-names incorrect usage

// Example 1: Using incorrect parameter names for promise functions
new Promise(resolver => {
  resolver(1);
})
  .then(noop)
  .catch(noop);
