// Rule: promise/param-names correct usage

// Example 1: Using correct parameter names for promise functions
new Promise(resolve => {
  resolve(1);
})
  .then(noop)
  .catch(noop);
