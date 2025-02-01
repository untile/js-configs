/* eslint-disable no-var */
// Rule: vars-on-top incorrect usage

// Example 1: Variable declarations are scattered throughout the function
function processData() {
  const result = [];

  for (let i = 0; i < 10; i++) {
    var temp = i * 2;
    result.push(temp);
  }

  const multiplier = 5;

  for (let i = 0; i < result.length; i++) {
    var value = result[i];
    result[i] = value * multiplier;
  }

  return result;
}

noop(processData());
