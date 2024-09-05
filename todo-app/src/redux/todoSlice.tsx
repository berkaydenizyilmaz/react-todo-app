import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoType, TodoIntialState } from "../types/Types";

const initialState: TodoIntialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state: TodoIntialState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];
    },

    removeTodoById: (state: TodoIntialState, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (todo: TodoType) => todo.id !== action.payload
      );
    },

    editTodoById: (state: TodoIntialState, action: PayloadAction<TodoType>) => {
      state.todos = state.todos.map((todo: TodoType) =>
        todo.id === action.payload.id
          ? { ...todo, content: action.payload.content }
          : todo
      );
    },
  },
});

export const { createTodo, removeTodoById, editTodoById } = todoSlice.actions;
export default todoSlice.reducer;
