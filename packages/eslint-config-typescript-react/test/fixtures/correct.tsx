import React from 'react';

type Props = {
  bar: number;
  foo: string;
};

export const Component = ({ bar, foo }: Props) => {
  const [baz, setBaz] = React.useState<number>(bar);

  React.useEffect(() => {
    setBaz(baz + 1);
  }, [baz]);

  return (
    <div onClick={() => setBaz(baz + 1)}>
      <div>{foo}</div>

      <div>{bar}</div>
    </div>
  );
};
