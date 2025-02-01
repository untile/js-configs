// Rule: no-shadow incorrect usage

// Example 1: Incorrect usage of shadowing
const num1 = 1;

const func = () => {
  const num1 = 2;

  return num1;
};

noop(num1, func);
