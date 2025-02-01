// Rule: no-lone-blocks correct usage

// Example 1: Using blocks with control flow statements
if (Math.random() > 0.5) {
  const num = 1;
  noop(num);
}

for (let i = 0; i < 3; i++) {
  const num2 = i * 2;
  noop(num2);
}
