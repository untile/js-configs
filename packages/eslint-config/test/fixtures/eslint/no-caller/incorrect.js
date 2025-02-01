// Rule: no-caller incorrect usage

// Example 1: Incorrect usage of caller
function foo() {
  noop(arguments.callee);
}

noop(foo());
