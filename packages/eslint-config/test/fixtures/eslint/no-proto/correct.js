// Rule: no-proto correct usage

// Example 1: Using Object.getPrototypeOf() instead of __proto__
const parent = { name: 'parent' };
const child = {};
Object.getPrototypeOf(child);

noop(child, parent);
