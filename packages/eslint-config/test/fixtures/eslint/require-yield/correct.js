// Rule: require-yield correct usage

// Example 1: Generator function with yield statement
function *generator() {
  yield 42;
}

noop(generator);
