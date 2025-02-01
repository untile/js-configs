// Rule: curly correct usage

const doSomething = () => ({});

// Example 1: Using curly braces with single-line if statement
if (Math.random() > 0.5) {
  doSomething();
}

// Example 2: Using curly braces with while loop
while (Math.random() > 0.5) {
  doSomething();
}

Object.freeze({ doSomething });
