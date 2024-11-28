import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectonReducer from "./connectionSlice"
export const store =configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        connection:connectonReducer
    }
})
