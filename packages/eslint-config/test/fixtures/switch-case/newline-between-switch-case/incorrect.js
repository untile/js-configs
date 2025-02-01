// Rule: newline-between-switch-case incorrect usage

// Example 1: Not using newline between switch cases
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
