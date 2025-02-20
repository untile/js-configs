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

  // Erro de performance
  delete window.something;

  // Erro de complexidade
  const Constructor = class {
    constructor() {
      super();
    }
  };

  // Erros de React
  return (
    <>
      <div>
        {/* Erros de acessibilidade */}
        <img src={'image.jpg'} />
        <img alt='image of a thing' src='image.jpg' />
        <img alt='photo image picture' src='image.jpg' />
        <a>Link sem href</a>
        <button onClick={() => {}}>Botão sem type</button>
        <div dangerouslySetInnerHTML={{ __html: '<p>Dangerous!</p>' }} />

        {/* Erros de suspeita */}
        {count == 0 ? 'Zero' : count == 1 ? 'One' : 'Many'}

        {/* Erro de React */}
        <div children={<p>Texto</p>} onClick={() => {}} />
        <div onClick={() => {}} />
      </div>
    </>
  );
}

export default BadComponent;
