// Rule: promise/no-return-wrap incorrect usage

// Example 1: Unnecessarily wrapping a promise with return or new Promise
new Promise(resolve => {
  resolve(1);
})
  .then(val => {
    return Promise.resolve(val + 1);
  })
  .catch(noop);
