// Rule: no-labels correct usage

// Example 1: Using a regular loop with continue/break instead of labels
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }

  if (i === 4) {
    break;
  }

  noop(i);
}
