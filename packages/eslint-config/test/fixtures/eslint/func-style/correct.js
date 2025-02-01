// Rule: func-style correct usage

// Example 1: Using function declaration style
function calculateTotal(price, tax) {
  return price + (price * tax);
}

Object.freeze({ total: calculateTotal(100, 0.1) });

// Example 2: Using arrow function (allowed by configuration)
const formatName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

Object.freeze({ formattedName: formatName('John', 'Doe') });
