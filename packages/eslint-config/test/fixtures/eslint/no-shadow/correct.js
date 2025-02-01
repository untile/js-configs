// Rule: no-shadow correct usage

// Example 1: Correct usage of no-shadow
const num1 = 1;

const func = () => {
  const num2 = 2;

  return num2;
};

noop(num1, func);
