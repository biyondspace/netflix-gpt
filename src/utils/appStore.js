import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducers,
  },
});
export default appStore;
