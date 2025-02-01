// Rule: yield-star-spacing correct usage

// Example 1: Generator function with proper spacing before the star operator
function *otherGenerator() {
  yield 1;
  yield 2;
}

function *generator() {
  yield* otherGenerator();
}

noop(generator());
