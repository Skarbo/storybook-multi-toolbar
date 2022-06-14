import React from 'react';

export type ExampleProps = {
  data: object;
};

const Example: React.FC<ExampleProps> = ({ data }) => (
  <div>
    <strong>Globals</strong>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

export default Example;
