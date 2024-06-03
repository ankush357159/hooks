import React, { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

const UseCallbackParent = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);
  console.log("Parent component rendered");
  return (
    <div>
      <p>Count: {count}</p>
      <UseCallbackChild increment={increment} />
    </div>
  );
};

export default UseCallbackParent;
