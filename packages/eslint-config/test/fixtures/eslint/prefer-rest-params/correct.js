// Rule: prefer-rest-params correct usage

// Example 1: Using rest parameters instead of arguments object
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

noop(sum(1, 2, 3, 4, 5));
