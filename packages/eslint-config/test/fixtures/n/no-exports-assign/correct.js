// Rule: n/no-exports-assign correct usage

// Example 1: Correct usage of exports assignment
const myModule = {
  myFunction: () => {
    return 'This is a correct export assignment.';
  }
};

module.exports = myModule;
