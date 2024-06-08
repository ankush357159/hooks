import React, { useReducer, useState } from "react";
import { todoReducer, initialState } from "../TodoReducer";
import "./TodoComponent.css";

function TodoComponent() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({ type: "add", payload: newTodo });
      setNewTodo("");
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button className="add" onClick={addTodo}>
        Add Todo
      </button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
            <button
              className="complete"
              onClick={() => dispatch({ type: "toggle", payload: todo.id })}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button
              className="delete"
              onClick={() => dispatch({ type: "remove", payload: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoComponent;
