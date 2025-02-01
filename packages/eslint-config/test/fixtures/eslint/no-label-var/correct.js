/* eslint-disable no-labels */
// Rule: no-label-var correct usage

// Example 1: Using a label name that does not conflict with a variable name
const loop = 'some value';

label: for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break label;
  }

  noop(i);
}

noop(loop);
