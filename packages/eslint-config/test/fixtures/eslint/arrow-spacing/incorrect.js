// Rule: arrow-spacing incorrect usage

// Example 1: Missing spaces around arrow
const noSpace = num=>num * 2;

// Example 2: Missing space before arrow
const beforeMissing = (num1, num2)=> a + num2;

// Example 3: Missing space after arrow
const afterMissing = () =>{ return 42; };

noSpace(5);
beforeMissing(1, 2);
afterMissing();
