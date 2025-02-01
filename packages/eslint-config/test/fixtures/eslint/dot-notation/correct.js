// Rule: dot-notation correct usage

// Example 1: Using dot notation instead of bracket notation for static properties
const person = {
  age: 30,
  name: 'John'
};

const name = person.name;
const age = person.age;

// Example 2: Using dot notation with chained properties
const company = {
  department: {
    engineering: {
      employees: 50,
      location: 'Building A'
    }
  }
};

const employeeCount = company.department.engineering.employees;
const location = company.department.engineering.location;

Object.freeze({ age, employeeCount, location, name });
