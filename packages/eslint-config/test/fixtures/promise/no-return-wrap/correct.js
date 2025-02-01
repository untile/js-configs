// Rule: promise/no-return-wrap correct usage

// Example 1: Returning a promise directly without wrapping in return or new Promise
new Promise(resolve => {
  resolve(1);
})
  .then(noop)
  .catch(noop);
