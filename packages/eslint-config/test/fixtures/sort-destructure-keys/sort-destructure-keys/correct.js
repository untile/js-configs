// Rule: sort-destructure-keys/sort-destructure-keys correct usage

// Example 1: Object destructuring with alphabetically sorted keys
const person = {
  age: 30,
  name: 'John',
  role: 'developer'
};

const { age, name, role } = person;

noop(age, name, role);
