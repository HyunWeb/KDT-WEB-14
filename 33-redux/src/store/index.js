import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isVisibleReducer from "./isVisibleReducer";
import counterCash from "./counterCash";

const rootReducer = combineReducers({
  // key : value
  counter: counterReducer,
  isVisible: isVisibleReducer,
  cash: counterCash,
});

export default rootReducer;
