// Rule: sort-destructure-keys/sort-destructure-keys incorrect usage

// Example 1: Object destructuring with unsorted keys
const person = {
  age: 30,
  name: 'John',
  role: 'developer'
};

const { name, age, role } = person;

noop(name, age, role);
