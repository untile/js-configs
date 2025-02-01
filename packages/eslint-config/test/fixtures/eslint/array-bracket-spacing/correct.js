// Rule: array-bracket-spacing correct usage

// Example 1: No spaces inside array brackets
const numbers = [1, 2, 3];

// Example 2: Nested arrays without spaces
const matrix = [[1, 2], [3, 4]];

// Example 3: Array with expressions
const calculated = [1 + 2, 3 * 4, 5 % 2];

// Example 4: Array of objects
const items = [{ id: 1 }, { id: 2 }];

// Example 5: Array destructuring
const [first, second] = numbers;

noop(numbers, matrix, calculated, items, first, second);
