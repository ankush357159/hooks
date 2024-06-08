import React, { useState, useTransition } from "react";

const WithTransition = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isPending, startTranstion] = useTransition();

  const handleChange = (e) => {
    const arr = [];
    setText(e.target.value);
    startTranstion(() => {
      for (let i = 0; i < 20000; i++) {
        arr.push(e.target.value);
      }
      setItems(arr);
    });
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <div>
        {isPending ? (
          <p>Loading...</p>
        ) : (
          items?.map((item, index) => {
            return <ul key={index}>{item}</ul>;
          })
        )}
      </div>
    </div>
  );
};

export default WithTransition;
