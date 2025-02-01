// Rule: brace-style correct usage

// Example 1: Standard 1tbs style
if (Math.random() > 0.5) {
  noop('true');
} else {
  noop('false');
}

// Example 2: Using allowSingleLine option
function shortFunction() { return true; }

// Example 3: Try-catch with 1tbs style
try {
  throw new Error('test');
} catch (error) {
  noop(error);
}

// Example 4: Nested blocks following 1tbs
function complexFunction() {
  if (Math.random() > 0.5) {
    if (Math.random() > 0.5) {
      noop('nested');
    }
  } else {
    noop('else block');
  }
}

noop(shortFunction, complexFunction);
