import { combineReducers } from "redux";
import todoReducer from "./todoReducers";

const reducers = combineReducers({
  todoReducer,
});

export default reducers;
