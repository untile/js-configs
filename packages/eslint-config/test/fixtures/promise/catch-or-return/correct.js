// Rule: promise/catch-or-return correct usage

// Example 1: Promise chain with proper error handling using catch
new Promise(resolve => {
  resolve(1);
})
  .then(value => value + 1)
  .then(value => value * 2)
  .catch(noop);
