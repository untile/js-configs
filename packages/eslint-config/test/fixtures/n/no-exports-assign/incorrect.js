// Rule: n/no-exports-assign incorrect usage

// Example 1: Incorrect usage of exports assignment
const myModule = {
  myFunction: () => {
    return 'This is an incorrect export assignment.';
  }
};

exports = myModule;
