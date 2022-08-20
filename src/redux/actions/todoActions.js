import {
  INSERT_TODO,
  SET_COMPLETE_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  REMOVE_ALL_TODOS,
} from "./types";

export const insertTodo = (todo) => ({
  type: INSERT_TODO,
  payload: todo,
});

export const setCompleteTodo = (id) => ({
  type: SET_COMPLETE_TODO,
  payload: id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const editTodo = (todo) => ({
  type: EDIT_TODO,
  payload: todo,
});

export const removeTodos = () => ({
  type: REMOVE_ALL_TODOS,
});
