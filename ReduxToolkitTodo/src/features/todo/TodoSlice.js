import { createSlice, nanoid } from "@reduxjs/toolkit";

const InitialState = {
  todos: [{ id: nanoid(), text: "hello world" }],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState: InitialState,

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      InitialState.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
  },
});

export const { addTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
