// Rule: no-loop-func correct usage

// Example 1: Using a function inside a loop
for (let i = 0; i < 3; i++) {
  const num = i * 2;
  noop(num);
}
