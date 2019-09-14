import { combineReducers } from "redux";
import itemReducer from "./item";
import listReducer from "./list";

const allReducers = combineReducers({
  list: listReducer,
  item: itemReducer
});

export default allReducers;
