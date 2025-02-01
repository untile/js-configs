// Rule: no-empty correct usage

// Example 1: Correct usage of empty block
const num = 1;

if (noop(num)) {
  noop();
}

while (noop(num)) {
  noop();
}

switch (num) {
  case 1:
    noop();
    break;
  default:
    noop();
    break;
}

try {
  noop();
} catch (ex) {
  noop(ex);
} finally {
  noop();
}
