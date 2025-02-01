// Rule: brace-style incorrect usage

// Example 1: Incorrect brace placement (Stroustrup style instead of 1tbs)
if (Math.random() > 0.5) {
  noop('true');
}
else {
  noop('false');
}

// Example 2: Incorrect brace placement in function
function wrongStyle()
{
  return true;
}

// Example 3: Incorrect try-catch brace style
try
{
  throw new Error('test');
}
catch (error)
{
  noop(error);
}

noop(wrongStyle);
