import { combineReducers, createStore } from "redux";
import todoReducer from "./Reducer/TodoReducer";

const reducers = combineReducers({todo: todoReducer});
const Store = createStore(reducers);

export default Store;
