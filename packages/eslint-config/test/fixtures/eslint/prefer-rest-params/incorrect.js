// Rule: prefer-rest-params incorrect usage

// Example 1: Using arguments object instead of rest parameters
function sum() {
  return Array.prototype.slice.call(arguments).reduce((total, num) => total + num, 0);
}

noop(sum(1, 2, 3, 4, 5));
