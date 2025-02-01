// Rule: semi-spacing incorrect usage

// Example 1: Wrong spacing of semicolons at the end of statements
const greeting = 'Hello world' ;
const numbers = [1, 2, 3];
numbers.forEach(num => {
  noop(num) ;
}) ;

noop(greeting, numbers);
;
