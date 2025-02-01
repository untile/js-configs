// Rule: no-script-url correct usage

// Example 1: Using proper URL instead of javascript: protocol
const link = document.createElement('a');
link.href = 'https://example.com';

link.onclick = function() {
  // Handle click event properly
  return false;
};
