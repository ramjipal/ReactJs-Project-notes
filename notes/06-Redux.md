- The data flow goes in one direction. A View can trigger an Action, that goes through the Dispatcher and Store, and would change the View eventually when the state in the Store changed.

- Redux adopted a handful of constraints from the Flux architecture but not all of them. It has Actions that encapsulate information for the actual state update. It has a Store to save the state, too. However, the Store is a singleton. Thus, there are not multiple Stores like there used to be in the Flux architecture. In addition, there is no single Dispatcher. Instead, Redux uses multiple Reducers. Basically, Reducers pick up the information from Actions and "reduce" the information to a new state, along with the old state, that is stored in the Store. When state in the Store is changed, the View can act on this by subscribing to the Store.

`View -> Action -> Reducer(s) -> Store -> View`

# Flow of Redux

The Redux data flow consists of the following steps:

1. **Action**:  
   A plain JavaScript object describing what you want to do.

2. **Dispatch**:  
   Sends the action to the Redux store.

3. **Reducer**:  
   A pure function that takes the current state and the action, processes it, and returns a new state.

4. **Store**:  
   The centralized state container, updated by reducers and accessed by components.

5. **View (UI)**:  
   React components that subscribe to the store, automatically re-rendering when the state updates.

# Setup

## create a Slice

```
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: nanoid(), text: "hello world" }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialstate,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

```

## create a store

```
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/TodoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer, // Add reducers here
  },
});

```

## wrap your app with redux provider

```import React from 'react';

import { store } from './app/store';
import App from './App';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

# Done

## using useSelector and useDispatch

```
// useSelector: Access state
const todos = useSelector(state => state.todo.todos);

// useDispatch: Dispatch an action
dispatch(addTodo("New Todo"));
```

---

```
const add = (e) => {
        e.preventDefault()
        dispatch(addTodo(input)) // this input is direclty come from html input field as payload
        setInput('')
    }
```

---

```
const todos = useSelector(state => (state.todos))
```

- useSelector is used to read the state (e.g., state.todo.todos).
- useDispatch is used to dispatch actions (e.g., addTodo).
