import React, { useState, useMemo } from "react";

function TodoList({ todos }) {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (selectedTab === "All") {
        return true;
      } else if (selectedTab === "Active") {
        return !todo.completed;
      } else if (selectedTab === "Completed") {
        return todo.completed;
      }
      return false; // Handle invalid tab values (optional)
    });
  }, [todos, selectedTab]); // Dependency array

  const handleTabChange = (event) => {
    setSelectedTab(event.target.value);
  };

  return (
    <div>
      <select value={selectedTab} onChange={handleTabChange}>
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Completed">Completed</option>
      </select>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
