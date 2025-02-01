// Rule: no-implied-eval incorrect usage

// Example 1: Using string evaluation in setTimeout which is equivalent to eval
setTimeout('noop(\'Hello!\')', 1000);
