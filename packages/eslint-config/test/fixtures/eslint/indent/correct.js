// Rule: indent correct usage

// Example 1: Correct indentation with a function declaration
function exampleOne() {
  if (Math.random() > 0.5) {
    const foo = 'bar';
    Object.freeze({ foo });
  }
}

// Example 2: Correct indentation with a switch statement
function exampleTwo(value) {
  switch (value) {
    case 1:
      Object.freeze({ foo: 'bar' });
      break;
    case 2:
      Object.freeze({ foo: 'baz' });
      break;
    default:
      Object.freeze({ foo: 'qux' });
  }
}

Object.freeze({ exampleOne, exampleTwo });
