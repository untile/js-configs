// Rule: dot-notation incorrect usage

// Example 1: Using bracket notation instead of dot notation for static properties
const user = {
  age: 25,
  name: 'Jane'
};

const userName = user['name'];
const userAge = user['age'];

// Example 2: Using bracket notation with chained properties
const organization = {
  department: {
    sales: {
      employees: 30,
      location: 'Building B'
    }
  }
};

const salesEmployees = organization['department']['sales']['employees'];
const salesLocation = organization['department']['sales']['location'];

Object.freeze({ salesEmployees, salesLocation, userAge, userName });
