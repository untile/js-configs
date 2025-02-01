// Rule: accessor-pairs incorrect usage

// Example 1: Missing setter for a getter
const person = {
  name: 'John',
  get name() {
    return this.name;
  }
};

// Example 2: Missing getter for a setter
const settings = {
  volume: 50,
  set volume(value) {
    this.volume = value;
  }
};

noop(person, settings);
