// Rule: promise/no-nesting incorrect usage

// Example 1: Nesting promises inside promise chains
new Promise(resolve => {
  resolve(1);
})
  .then(value => {
    return new Promise(resolve => {
      resolve(value + 1)
        .then(result => {
          return new Promise(_resolve => {
            _resolve(result * 2);
          });
        })
        .catch(noop);
    });
  })
  .catch(error => {
    noop(error);
  });
