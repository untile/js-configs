// Rule: no-loop-func incorrect usage

// Example 1: Creating a function inside a loop that references loop variables
let foo = 0;

for (let i = 0; i < 10; ++i) {
  setTimeout(() => noop(foo));
  foo += 1;
}
