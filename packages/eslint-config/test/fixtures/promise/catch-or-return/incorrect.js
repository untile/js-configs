// Rule: promise/catch-or-return incorrect usage

// Example 1: Missing error handling in promise chain
new Promise(resolve => {
  resolve(1);
})
  .then(value => value + 1)
  .then(value => value * 2);
