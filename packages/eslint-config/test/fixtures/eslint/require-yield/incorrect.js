// Rule: require-yield incorrect usage

// Example 1: Generator function without yield statement
function *generator() {
  return 42;
}

noop(generator);
