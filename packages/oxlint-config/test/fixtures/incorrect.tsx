import React, { useState, useEffect } from 'react';

function BadComponent(props) {
  var count = 0;
  const [state, setState] = useState<any>({ data: null });

  function doManyThings(param1, param2, param3, param4, param5) {
    if (param1 == null) {
      console.log('Erro');
      alert('Algo deu errado!');
      return;
    } else {
      return param1;
    }
  }

  const nested = (a) => (b) => (c) => a + b + c;

  useEffect(() => {
    // Missing dependencies.
  }, []);

  async function fetchWithoutTry() {
    const response = await fetch('https://api.example.com');
    return response.json();
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: '<p>Perigoso!</p>' }} />
      {count == 0 ? 'Zero' : count == 1 ? 'Um' : 'Muitos'}
      <span class='errado'>Texto</span>
    </div>
  );
}

export default BadComponent;
