/* eslint-disable padding-line-between-statements */
// Rule: no-case-curly incorrect usage

// Example 1: Using curly braces in case statements
const number = 1;

switch (number) {
  case 1: {
    noop(number);
    break;
  }
  case 2: {
    noop(number);
    break;
  }
  default: {
    noop(number);
    break;
  }
}
