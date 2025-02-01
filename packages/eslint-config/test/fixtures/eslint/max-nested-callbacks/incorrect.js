// Rule: max-nested-callbacks incorrect usage

// Example 1: Incorrect usage of max-nested-callbacks with multiple nested callbacks
function outerCallback(callback) {
  callback(() => {
    callback(() => {
      callback(() => {
        callback(() => {
          callback(() => {
            callback(() => {
              callback(() => {
                noop('This is an invalid usage with multiple nested callbacks.');
              });
            });
          });
        });
      });
    });
  });
}

outerCallback(innerCallback => innerCallback());
