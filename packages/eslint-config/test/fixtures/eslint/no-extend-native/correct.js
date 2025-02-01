// Rule: no-extend-native correct usage

// Example 1: Using Object.create() instead of extending native objects
const customObj = Object.create(null);

customObj.customMethod = function() {
  return 'custom behavior';
};

noop(customObj);

