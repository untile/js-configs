// Rule: promise/always-return correct usage

// Example 1: Always returning a value from promise chains
new Promise(resolve => {
  resolve(1);
})
  .then(value => {
    // Process value and return result
    return value + 1;
  })
  .then(value => {
    // Always return something from promise chains
    return value * 2;
  })
  .catch(noop);
