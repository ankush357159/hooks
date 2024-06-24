import React from "react";
import CounterProvider from "./CounterProvider";
import CounterChild from "./CounterChild";

export const CounterParent = () => {
  return (
    <CounterProvider>
      <div>This is Parent component</div>
      <br />
      <div>Below is child component</div>
      <CounterChild />
    </CounterProvider>
  );
};

