// Rule: no-empty incorrect usage

// Example 1: Inorrect usage of empty block
const num = 1;

if (noop(num)) {
}

while (noop(num)) {
}

switch (num) {
}

try {
} catch (ex) {
  noop(ex);
} finally {
}
