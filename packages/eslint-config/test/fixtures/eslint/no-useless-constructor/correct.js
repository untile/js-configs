// Rule: no-useless-constructor correct usage

// Example 1: Constructor with additional initialization logic
class User {

  constructor(name) {
    this.name = name;
    this.createdAt = new Date();
  }

}

const user = new User('John');

noop(user);
