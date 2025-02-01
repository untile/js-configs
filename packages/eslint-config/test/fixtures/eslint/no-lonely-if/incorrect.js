// Rule: no-lonely-if incorrect usage

// Example 1: Using a lonely if statement inside an else clause
if (Math.random() > 0.5) {
  const num = 1;
  noop(num);
} else {
  if (Math.random() < 0.2) {
    const num = 2;
    noop(num);
  }
}
