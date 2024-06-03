import React from "react";

const ChildWithoutMemo = ({ value }) => {
  console.log("Child component");
  return <div>This is Child component: {value}</div>;
};

export default ChildWithoutMemo;
