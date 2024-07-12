import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import contentSlice from "../slices/contentSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    content: contentSlice,
  },
});
