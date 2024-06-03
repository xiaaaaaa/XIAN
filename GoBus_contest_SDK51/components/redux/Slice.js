import { configureStore, createSlice } from "@reduxjs/toolkit";

// Part1: Define Slice (including reducers and actions)
const initialState = { userName: "XIAN" };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateUserName: (state, action) => {
        state.userName = action.payload;
      },
  },
});

export const selectCounter = (state) => state.counter.userName;
export const { updateUserName } = counterSlice.actions;
export default counterSlice.reducer;