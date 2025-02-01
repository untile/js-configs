// Rule: promise/no-callback-in-promise incorrect usage

// Example 1: Using callback inside a promise chain
const callback = () => {
  noop(value);
};

new Promise(resolve => {
  resolve(1);
})
  .then(value => {
    callback(value);

    return value;
  })
  .catch(err => callback(err));
