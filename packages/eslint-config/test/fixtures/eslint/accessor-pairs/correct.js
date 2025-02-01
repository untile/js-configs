// Rule: accessor-pairs correct usage
// Example 1: Defining both getter and setter
const person = {
  name: 'John',
  get name() {
    return this.name;
  },
  set name(value) {
    this.name = value;
  }
};

noop(person);
