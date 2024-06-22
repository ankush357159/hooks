import React, { useState } from "react";
import Greetings from "./Greetings";

const MemoParent = () => {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <Greetings greet={name} />
    </div>
  );
};

export default MemoParent;
