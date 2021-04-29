import { combineReducers } from "redux";
import { tasksReducer as taskList } from "../bus/tasks/reducer";

export const rootReducer = combineReducers({
  taskList,
});
