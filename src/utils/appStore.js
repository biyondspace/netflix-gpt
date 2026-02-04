import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducers,
    movies: moviesReducer,
  },
});
export default appStore;
