import React, { useEffect, useRef, useState } from "react";

const TrackPreviousValue = () => {
  const [value, setValue] = useState("");
  const previousValue = useRef();
  console.log(previousValue)
  useEffect(() => {
    previousValue.current = value;
  }, [value]);
  return (
    <div>
      <input
        type="text"
        value={value}
        ref={previousValue}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>Current value: {value}</div>
      <div>Previous value: {previousValue.current}</div>
    </div>
  );
};

export default TrackPreviousValue;
