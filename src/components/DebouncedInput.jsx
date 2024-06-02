import React, { useState, useEffect } from "react";

function DebouncedInput() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState(null);

  useEffect(() => {
    if (inputValue.trim() !== "") {
      const debounceTimer = setTimeout(() => {
        const fetchedSuggestion = fetchRandomSuggestion(inputValue);
        setSuggestions([fetchedSuggestion]);
      }, 300);

      return () => clearTimeout(debounceTimer);
    } else {
      setSuggestions(null);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchRandomSuggestion = () => {
    const suggestions = ["apple", "banana", "mango", "strawberry", "blueberry"];
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    return suggestions[randomIndex];
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "5%" }}>
        This is a demo of Debouncing and throttling of user input using useEffect
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <br />
        <div style={{ marginTop: "10px" }}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..."
          />
          <ul>
            {suggestions !== null &&
              suggestions.map((suggestion, index) => <li key={index}>{suggestion}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DebouncedInput;
