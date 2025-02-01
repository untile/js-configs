// Rule: no-prototype-builtins incorrect usage

// Example 1: Directly calling hasOwnProperty on an object (unsafe)
const obj = { key: 'value' };
obj.hasOwnProperty('key');
