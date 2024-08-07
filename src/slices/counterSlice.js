import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    offsetValue: (state, action) => {
      state.value += action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { increment, decrement, reset, offsetValue } =
  counterSlice.actions;
export default counterSlice.reducer;
