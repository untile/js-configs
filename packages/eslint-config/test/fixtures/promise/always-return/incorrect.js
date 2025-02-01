// Rule: promise/always-return incorrect usage

// Example 1: Missing return statement in promise chain
new Promise(resolve => {
  resolve(1);
})
  .then(value => {
    const val = value + 1;
    noop(val);
  })
  .then(value => {
    const val = value * 2;
    noop(val);
  })
  .catch(noop);
