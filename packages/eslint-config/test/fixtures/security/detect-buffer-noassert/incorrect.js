// Rule: security/detect-buffer-noassert incorrect usage

// Example 1: Using Buffer methods with noAssert parameter set to true which skips bounds checking
const buffer = Buffer.from([1, 2, 3, 4]);

buffer.readUInt32LE(0, true);
