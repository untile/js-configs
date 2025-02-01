// Rule: no-script-url incorrect usage

// Example 1: Using javascript: protocol in href (unsafe)
const link = document.createElement('a');
link.href = 'javascript:void(0)';

link.onclick = function() {
  doSomething();
};
