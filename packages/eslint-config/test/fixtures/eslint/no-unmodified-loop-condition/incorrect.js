// Rule: no-unmodified-loop-condition incorrect usage

// Example 1: Incorrect usage of no-unmodified-loop-condition
const i = 0;

while (i < 10) {
  noop();
}

noop(i);
