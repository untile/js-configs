// Rule: max-depth correct usage

// Example 1: Correct usage of max-depth with nested functions
function outerFunction() {
  if (Math.random() > 0.5) {
    noop();
  }
}

noop(outerFunction);
