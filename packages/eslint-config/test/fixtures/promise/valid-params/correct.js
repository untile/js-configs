// Rule: promise/valid-params correct usage

// Example 1: Using the correct number of arguments in promise methods
new Promise(resolve => {
  resolve(1);
})
  .then(val => val + 1)
  .catch(err => noop(err));
