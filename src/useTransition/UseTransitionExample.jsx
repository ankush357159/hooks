import React, { useState, useTransition } from "react";
import "./UseTransitionExample.css";

const UseTransitionExample = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Pineapple",
    "Strawberry",
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(value)
      );
      setFilteredItems(filteredItems);
    });
  };
  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      {isPending && <p className="search-loading">Loading...</p>}
      <ul className="search-item-list">
        {filteredItems.map((item, index) => (
          <li key={index} className="search-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseTransitionExample;
