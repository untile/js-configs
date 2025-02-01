// Rule: no-case-curly correct usage

// Example 1: Not using curly braces in case statements
const number = 1;

switch (number) {
  case 1:
    noop(number);
    break;
  case 2:
    noop(number);
    break;
  default:
    noop(number);
    break;
}
