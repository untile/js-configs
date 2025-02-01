// Rule: object-shorthand incorrect usage

// Example 1: Not using object property shorthand
const height = '55cm';
const age = 42;

const person = {
  age: age,
  height: height
};

noop(person);
