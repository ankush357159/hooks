import React, { memo } from "react";

const ChildWithMemo = ({value}) => {
  console.log("Child component");
  return <div>This is Child component: {value}</div>;
};

export default memo(ChildWithMemo);
