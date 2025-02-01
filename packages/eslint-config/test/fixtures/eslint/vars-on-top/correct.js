// Rule: vars-on-top correct usage

// Example 1: All variable declarations are at the top of their scope
function doSomething() {
  let foo = 'bar';
  let bar = 'baz';
  const baz = 'baz';

  foo = 'foo';
  bar = 'bar';

  return foo + bar + baz;
}

noop(doSomething());
