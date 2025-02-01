// Rule: no-extra-bind incorrect usage

// Example 1: Unnecessary bind on arrow function
const greet = (name => `Hello ${name}`).bind(this);

noop(greet('World'));
