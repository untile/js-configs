// Rule: dot-location correct usage

// Example 1: Dot operator on the same line as the property
const person = {
  greet() {
    return 'Hello';
  },
  name: 'John'
};

const name = person
  .name;

person
  .greet();

// Example 2: Chained method calls with dot on property line
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(num => num > 2)
  .map(num => num * 2)
  .reduce((sum, num) => sum + num, 0);

Object.freeze({ name, result });
