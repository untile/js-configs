// Rule: no-else-return correct usage

// Example 1: Using early returns instead of else
function getResponse(value) {
  if (value > 100) {
    return 'Too high';
  }

  if (value < 0) {
    return 'Too low';
  }

  return 'Just right';
}

noop(getResponse);
