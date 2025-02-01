// Rule: no-implied-eval correct usage

// Example 1: Using setTimeout with a function reference instead of string evaluation
const sayHello = () => noop('Hello!');
setTimeout(sayHello, 1000);

noop(sayHello);
