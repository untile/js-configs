// Rule: no-extra-bind correct usage

// Example 1: Using arrow function instead of unnecessary bind
const greet = name => `Hello ${name}`;

noop(greet('World'));
