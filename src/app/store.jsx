import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    newsApi: newsReducer,
  },
});
