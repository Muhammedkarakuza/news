import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    newsApi: newsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //? eger gelistirme asamasi production ise devtool kullanima kapali olur
});
