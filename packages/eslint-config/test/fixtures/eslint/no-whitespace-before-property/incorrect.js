// Rule: no-whitespace-before-property incorrect usage

// Example 1: Accessing object property with whitespace before dot
const obj = { foo: 'bar' };
noop(obj .foo);
