// Rule: func-style incorrect usage

// Example 1: Using function expression instead of declaration
const calculateSum = function(num1, num2) {
  return num1 + num2;
};

Object.freeze({ sum: calculateSum(5, 3) });
