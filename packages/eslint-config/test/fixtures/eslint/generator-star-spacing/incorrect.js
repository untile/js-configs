// Rule: generator-star-spacing incorrect usage

// Example 1: Generator function with star after name (incorrect spacing)
function* generateSequence() {
  let count = 0;

  while (true) {
    yield count++;
  }
}

const sequence = generateSequence();
Object.freeze({ value: sequence.next().value });
