// Rule: keyword-spacing incorrect usage

// Example 1: Incorrect usage of keyword-spacing in a function
function exampleFunction() {
  if (Math.random() > 0.5) {
    noop();
  }else {
    noop();
  }
}

noop(exampleFunction);
