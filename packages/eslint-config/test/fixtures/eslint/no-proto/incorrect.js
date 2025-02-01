// Rule: no-proto incorrect usage

// Example 1: Using __proto__ property (deprecated) to access prototype
const obj = {};

noop(obj.__proto__);
