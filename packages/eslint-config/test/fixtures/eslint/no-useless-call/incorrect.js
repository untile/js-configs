/* eslint-disable no-undefined */
// Rule: no-useless-call incorrect usage

// Example 1: Incorrect usage of .call() when a direct call would suffice
const foo = () => null;

foo.call(undefined, 1);
