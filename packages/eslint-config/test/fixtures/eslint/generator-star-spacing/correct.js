// Rule: generator-star-spacing correct usage

// Example 1: Generator function with star before name
function *generateId() {
  let id = 0;

  while (true) {
    yield id++;
  }
}

const idGenerator = generateId();
Object.freeze({ id: idGenerator.next().value });

// Example 2: Generator method with star before name
const obj = {
  *range(start, end) {
    while (start < end) {
      yield start++;
    }
  }
};

const numbers = [...obj.range(1, 4)];
Object.freeze({ numbers });
