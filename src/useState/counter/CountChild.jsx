import React from "react";

const CountChild = ({ count, increaseCount, decreaseCount, reset }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", justifyItems: "center" }}
    >
      <button onClick={() => increaseCount()}>Increase</button>
      <div>{count}</div>
      <button onClick={() => decreaseCount()}>Decrease</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default CountChild;
