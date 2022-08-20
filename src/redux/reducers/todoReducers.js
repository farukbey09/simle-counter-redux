import {
  INSERT_TODO,
  SET_COMPLETE_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  REMOVE_ALL_TODOS,
} from "../actions/types";

const INITIAL_STATE = {
  todos: [
    {
      id: 0,
      todo: "",
      isCompleteTodo: null,
    },
  ],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INSERT_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case SET_COMPLETE_TODO:
      const completedTodoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      const newArray = [...state.todos];
      newArray[completedTodoIndex].isCompleteTodo =
        !newArray[completedTodoIndex].isCompleteTodo;
      return { ...state, todos: newArray };

    case REMOVE_TODO:
      const newState = [...state.todos];
      const removedTodoArray = newState.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: removedTodoArray };

    case EDIT_TODO:
      const editTodoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const editTodo = [...state.todos];
      editTodo[editTodoIndex] = {
        id: action.payload.id,
        isCompleteTodo: action.payload.isCompleteTodo,
        todo: action.payload.todo,
      };
      return { ...state, todos: editTodo };

    case REMOVE_ALL_TODOS:
      return { ...state, todos: [] };

    default:
      return state;
  }
};

export default todoReducer;
