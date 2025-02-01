// Rule: max-params correct usage

// Example 1: Correct usage of max-params with a single parameter
function exampleFunction(param1) {
  noop(param1);
}

exampleFunction('This is a valid single parameter usage.');

// Example 2: Correct usage of max-params with multiple parameters
function exampleFunction2(param1, param2, param3, param4) {
  noop(param1, param2, param3, param4);
}

exampleFunction2('This is a valid multiple parameter usage.');
