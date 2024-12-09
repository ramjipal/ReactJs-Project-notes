import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "some strings",
      completed: false,
    },
  ],

  updateTodoIncont: (id, todo) => {},
  deleteTodoIncont: (id) => {},
  toggleComplete: (id) => {},
  addTodoIncont: (todo) => {},
});

export const useTodo = () => useContext(TodoContext)
export const TodoProvider = TodoContext.Provider

