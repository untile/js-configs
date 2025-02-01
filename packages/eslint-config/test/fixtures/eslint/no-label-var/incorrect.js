/* eslint-disable no-labels */
// Rule: no-label-var incorrect usage

// Example 1: Using a label name that conflicts with a variable name
const loop = 'some value';

loop: for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break loop;
  }

  noop(i);
}

noop(loop);
