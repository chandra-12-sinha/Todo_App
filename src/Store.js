import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import todoReducer from './Slices/TodoSlices'


const reducers = combineReducers({todo: todoReducer});
const store = configureStore({
    reducer : {
        todo: todoReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;
