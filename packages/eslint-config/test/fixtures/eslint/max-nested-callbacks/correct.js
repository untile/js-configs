// Rule: max-nested-callbacks correct usage

// Example 1: Correct usage of max-nested-callbacks with a single callback
function callbackFunction(callback) {
  callback();
}

callbackFunction(() => {
  noop('This is a valid single callback usage.');
});
