// Rule: prefer-spread incorrect usage

// Example 1: Using apply instead of spread operator
const numbers = [1, 2, 3, 4, 5];
Math.max.apply(Math, numbers);
