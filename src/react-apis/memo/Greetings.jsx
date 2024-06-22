import React, { memo } from "react";

const Greetings = ({ greet }) => {
    console.log('Greetings rendered at: ', new Date().toLocaleTimeString())
  return <div>{`Welcome ${greet}!`}</div>;
};

export default memo(Greetings);
