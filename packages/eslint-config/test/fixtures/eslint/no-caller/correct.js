// Rule: no-caller correct usage

// Example 1: Using named function reference instead of caller
function foo(callback) {
  callback();
}

function bar() {
  // Pass the function reference directly instead of using caller
  foo(bar);
}

noop(bar());
