/* eslint-disable new-cap */
// Rule: promise/no-new-statics incorrect usage

// Example 1: Using new Promise.resolve() and new Promise.reject() instead of calling them directly
const promise = new Promise.resolve(42)
  .then(value => value * 2)
  .catch(noop);

const promise2 = new Promise.reject(new Error('Failed'))
  .catch(error => {
    noop(error);
  });

noop(promise, promise2);
