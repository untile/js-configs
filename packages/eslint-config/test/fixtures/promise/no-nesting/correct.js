// Rule: promise/no-nesting correct usage

// Example 1: Using sequential promise chains instead of nesting
new Promise(resolve => {
  resolve(1);
})
  .then(value => value + 1)
  .then(value => new Promise(resolve => resolve(value * 2)))
  .then(result => noop(result))
  .catch(error => {
    noop(error);
  });
