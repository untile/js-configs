// Rule: space-in-parens incorrect usage

// Example 1: Spaces inside parentheses
function greet( name ) {
  return `Hello ${name}!`;
}

const multiply = ( num, num2 ) => num * num2;

if ( Math.random() > 0.5 ) {
  noop( greet( 'world' ), multiply( 2, 3 ) );
}
