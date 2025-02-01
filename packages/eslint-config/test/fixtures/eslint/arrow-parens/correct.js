// Rule: arrow-parens correct usage
// Example 1: Single parameter without parentheses (as-needed)
const double = num => num * 2;

// Example 2: Multiple parameters require parentheses
const add = (num1, num2) => num1 + num2;

// Example 3: Empty parameter list requires parentheses
const getRandomNumber = () => Math.random();

// Example 4: Destructuring requires parentheses
const getName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

// Example 5: Parameter with default value requires parentheses
const greet = (name = 'Guest') => `Hello ${name}!`;

double(1);
add(1, 2);
getRandomNumber();
getName({ firstName: 'John', lastName: 'Doe' });
greet('Alice');
