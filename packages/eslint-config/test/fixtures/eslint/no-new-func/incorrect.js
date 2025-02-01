// Rule: no-new-func incorrect usage

// Example 1: Incorrect usage of new Function constructor
const fn = new Function('a', 'b', 'return a + b');

noop(fn);
