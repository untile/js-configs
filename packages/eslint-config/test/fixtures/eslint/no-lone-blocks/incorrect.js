// Rule: no-lone-blocks incorrect usage

// Example 1: Using a standalone block without control flow statements
{
  const num = 1;
  noop(num);
}

{
  function func() {
    {func();}
  }

  noop(func);
}
