import React, { useState } from 'react';

function BadComponent(props) {
  const count = 0;
  const [state, setState] = useState<unknown>({ data: null });

  function doManyThings(param1, param2, param3, param4, param5) {
    if (param1 == null) {
      console.log('Error');

      return;
    }
  }

  // Performance error.
  delete window.something;

  // Complexity error.
  const Constructor = class {
    constructor() {
      super();
    }
  };

  // React errors.
  return (
    <>
      <div>
        {/* Accessibility errors */}
        <img src={'image.jpg'} />
        <img alt='image of a thing' src='image.jpg' />
        <img alt='photo image picture' src='image.jpg' />
        <a>Link without href</a>
        <button onClick={() => {}}>Button without type</button>
        <div dangerouslySetInnerHTML={{ __html: '<p>Dangerous!</p>' }} />

        {/* Suspicious errors */}
        {count == 0 ? 'Zero' : count == 1 ? 'One' : 'Many'}

        {/* React errors */}
        <div children={<p>Text</p>} onClick={() => {}} />
        <div onClick={() => {}} />
      </div>
    </>
  );
}

export default BadComponent;
