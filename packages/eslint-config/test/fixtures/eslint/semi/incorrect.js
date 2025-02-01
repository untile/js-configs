// Rule: semi incorrect usage

// Example 1: Missing semicolons at the end of statements
const greeting = 'Hello world'
const numbers = [1, 2, 3]
numbers.forEach(num => {
  noop(num)
})

noop(greeting, numbers);
