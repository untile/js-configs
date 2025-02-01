// Rule: promise/no-return-in-finally correct usage

// Example 1: Not returning in the finally block
new Promise(resolve => {
  resolve(1);
})
  .then(value => value + 1)
  .catch(err => noop(err))
  .finally(noop)
  .catch(err => noop(err));
