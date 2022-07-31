import { combineReducers } from "@reduxjs/toolkit";
import { commentReducer } from "./commentsReducer";


const reducers = combineReducers({
    commentReducer,
  });


export default reducers