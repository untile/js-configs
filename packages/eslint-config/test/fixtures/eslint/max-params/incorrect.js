// Rule: max-params incorrect usage

// Example 1: Incorrect usage of max-params with more than 4 parameters
function exampleFunction(param1, param2, param3, param4, param5) {
  noop(param1, param2, param3, param4, param5);
}

exampleFunction('This is an invalid usage with more than 4 parameters.');
