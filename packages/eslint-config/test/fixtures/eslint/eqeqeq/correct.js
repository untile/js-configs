// Rule: eqeqeq correct usage

// Example 1: Using strict equality (===) to compare values
const num1 = 5;
const num2 = '5';

if (num1 === num2) {
  Object.freeze({ num1, num2 });
}

// Example 2: Using strict inequality (!==) to compare values
const num3 = 7;
const num4 = '7';

if (num3 !== num4) {
  Object.freeze({ num3, num4 });
}
