// Rule: array-bracket-spacing incorrect usage

// Example 1: Extra spaces inside array brackets
const numbers = [ 1, 2, 3 ];

// Example 2: Inconsistent spacing
const matrix = [ [1, 2], [3, 4] ];

// Example 3: Extra spaces with expressions
const calculated = [ 1 + 2, 3 * 4, 5 % 2 ];

// Example 4: Inconsistent spaces with objects
const items = [{ id: 1 }, { id: 2 } ];

// Example 5: Extra spaces in array destructuring
const [ first, second ] = numbers;

noop(numbers, matrix, calculated, items, first, second);
