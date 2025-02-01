// Rule: no-iterator correct usage

// Example 1: Using Array methods instead of iterator property
const arr = [1, 2, 3];
const mapped = arr.map(num => num * 2);

noop(mapped);
