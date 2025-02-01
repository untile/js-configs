// Rule: promise/no-return-in-finally incorrect usage

// Example 1: Returning a promise in the finally block
new Promise(resolve => {
  resolve(1);
})
  .then(value => value + 1)
  .catch(err => noop(err))
  .finally(val => { return val + 1; })
  .catch(err => noop(err));
