// Rule: security/detect-buffer-noassert correct usage

// Example 1: Using Buffer methods with noAssert parameter set to false for safe bounds checking
const buffer = Buffer.from([1, 2, 3, 4]);

buffer.readUInt32LE(0, false);
