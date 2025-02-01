// Rule: comma-spacing correct usage

// Example 1: Object literal with proper comma spacing
const obj = { boo: 'bar', faz: 'qux' };

// Example 2: Array literal with proper comma spacing
const arr = [1, 2, 3, 4];

// Example 3: Function parameters with proper comma spacing
function foo(param1, param2, param3) {
  return param1 + param2 + param3;
}

// Example 4: Destructuring with proper comma spacing
const { one, two } = obj;

// Example 6: Function call arguments with proper comma spacing
foo('a', 'b', 'c');

noop(obj, arr, foo, one, two);
