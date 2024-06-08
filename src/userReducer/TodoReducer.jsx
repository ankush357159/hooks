export const initialState = {
  todos: [],
  nextId: 1,
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [...state.todos, { id: state.nextId, text: action.payload }],
        nextId: state.nextId + 1,
      };
    case "remove":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "toggle":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      throw new Error("Invalid selection");
  }
};
