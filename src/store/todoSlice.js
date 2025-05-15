import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift({
        id: nanoid(),
        category: action.payload.category,
        edit: false,
        text: action.payload.text,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    editTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.edit = !todo.edit;
    },
    resubmitTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) todo.edit = !todo.edit;
      if (todo) todo.text = action.payload.text;
      if (todo) todo.category = action.payload.category;
    },
    // filterCategory: (state, action) => {

    //   if (action.payload.category=="Normal") {
    //     state.filtrrd=state.todos
    //   } else {
    //       state.filtrrd=state.todos.filter((t) => t.category == action.payload.category);

    //   }

    // },
  },
});

export const {
  addTodo,
  toggleTodo,

  editTodo,
  resubmitTodo,
  removeTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
