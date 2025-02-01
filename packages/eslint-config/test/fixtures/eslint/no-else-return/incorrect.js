// Rule: no-else-return incorrect usage

// Example 1: Using else statement
function getResponse(value) {
  if (value > 100) {
    return 'Too high';
  } else {
    return 'Just right';
  }
}

noop(getResponse);
