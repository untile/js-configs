// Rule: promise/no-new-statics correct usage

// Example 1: Using Promise.resolve() and Promise.reject() directly instead of new Promise
Promise.resolve(1)
  .then(value => value + 1)
  .catch(noop);

Promise.reject(new Error('Something went wrong'))
  .catch(error => {
    noop(error);
  });
