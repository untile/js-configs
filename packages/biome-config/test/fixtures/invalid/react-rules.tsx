import { useEffect, useState } from 'react';

export function Profile({ id, visible }: { id: string; visible: boolean }) {
  const [data, setData] = useState('');

  if (visible) {
    useState(0);
  }

  useEffect(() => {
    setData(id);
  }, []);

  function Inner() {
    return <p>{data}</p>;
  }

  return (
    <>
      <input disabled />
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
      <span>Hello world</span>
      <Inner />
    </>
  );
}
