import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((pre) => pre + 1);
  };
  return <div>
    <p>Count: {count}</p>
    <ChildComponent increment={increment} />
  </div>;
};

export default ParentComponent