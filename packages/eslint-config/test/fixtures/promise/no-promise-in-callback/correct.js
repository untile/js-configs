// Rule: promise/no-promise-in-callback correct usage

// Example 1: Using async/await instead of promises in callbacks
foo(async result => {
  const value = await processResult(result);
  noop(value);
});
