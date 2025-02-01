// Rule: no-unmodified-loop-condition correct usage

// Example 1: Correct usage of no-unmodified-loop-condition
let i = 0;

while (i < 10) {
  i++;
}

noop(i);
