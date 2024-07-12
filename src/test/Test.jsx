import React, { useEffect, useState } from "react";

const Test = () => {
  const [value, setValue] = useState("");
  useEffect(()=> {
    setValue("Hi")
  },[])
  return (
    <div>
      <div>This is test component: {value}</div>
      <button onClick={() => setValue("Hello")}>Click Me!</button>
    </div>
  );
};

export default Test;
