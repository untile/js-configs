// Rule: max-depth incorrect usage

// Example 1: Incorrect usage of max-depth with excessive nesting
function levelOne() {
  if (Math.random() > 0.5) {
    if (Math.random() > 0.5) {
      if (Math.random() > 0.5) {
        if (Math.random() > 0.5) {
          if (Math.random() > 0.5) {
            if (Math.random() > 0.5) {
              if (Math.random() > 0.5) {
                noop();
              }
            }
          }
        }
      }
    }
  }
}

noop(levelOne);
