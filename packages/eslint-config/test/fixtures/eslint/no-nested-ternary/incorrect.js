// Rule: no-nested-ternary incorrect usage

// Example 1: Incorrect usage of nested ternary

const num = Math.random() > 0.5 ? 1 : Math.random() > 0.5 ? 2 : 3;

noop(num);
