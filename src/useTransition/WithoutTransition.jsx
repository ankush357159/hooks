import React, { useState } from "react";

const WithoutTransition = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const arr = [];
    setText(e.target.value);
    for (let i = 0; i < 20000; i++) {
      arr.push(e.target.value);
    }
    setItems(arr);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <div>
        {items?.map((item, index) => (
          <ul key={index}>{item}</ul>
        ))}
      </div>
    </div>
  );
};

export default WithoutTransition;
