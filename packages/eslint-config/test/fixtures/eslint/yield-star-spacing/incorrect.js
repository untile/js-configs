// Rule: yield-star-spacing incorrect usage

// Example 1: Generator function with incorrect spacing around the star operator
function *otherGenerator() {
  yield 1;
  yield 2;
}

function *generator() {
  yield *otherGenerator();
}

noop(generator());
