// Rule: promise/no-callback-in-promise correct usage

// Example 1: Using promise chaining instead of callbacks in promises
new Promise(resolve => {
  resolve(1);
})
  .then(value => {
    return value + 1;
  })
  .then(value => {
    return value * 2;
  })
  .catch(noop);
