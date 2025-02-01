// Rule: comma-dangle correct usage

// Example 1: Object literal with trailing commas
const obj = {
  boo: 'bar',
  faz: 'qux'
};

// Example 2: Array literal with trailing commas
const arr = [
  1,
  2,
  3
];

// Example 3: Function parameters with trailing commas
function foo(
  param1,
  param2
) {
  return param1 + param2;
}

// Example 4: Object destructuring with trailing commas
const {
  var1,
  var2
} = obj;

// Example 5: Array destructuring with trailing commas
const [
  arr1,
  arr2
] = arr;

noop(obj, arr, foo, var1, var2, arr1, arr2);
