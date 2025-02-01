// Rule: promise/no-promise-in-callback incorrect usage

// Example 1: Using promises in callback functions instead of async/await
foo((err, val) => {
  if (err) {
    noop(err);
  } else {
    new Promise(resolve => resolve(val)).then(noop).catch(noop);
  }
});
