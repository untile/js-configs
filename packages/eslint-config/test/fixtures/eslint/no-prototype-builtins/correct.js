// Rule: no-prototype-builtins correct usage

// Example 1: Using Object.prototype methods through call() instead of directly
const obj = { key: 'value' };
Object.prototype.hasOwnProperty.call(obj, 'key');
