import React, { forwardRef } from "react";

const MyInput = ((props, ref) => {
  console.log(ref)
  return <input ref={ref} {...props}/>;
});

export default forwardRef(MyInput);
