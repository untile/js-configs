// Rule: no-extend-native incorrect usage

// Example 1: Extending native objects
Array.prototype.customMethod = function() {
  return 'custom behavior';
};

noop(Array.prototype.customMethod);
