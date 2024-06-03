import React, { memo } from "react";

const UseCallbackChild = ({ increment }) => {
  console.log("Child component rendered");
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default memo(UseCallbackChild);
