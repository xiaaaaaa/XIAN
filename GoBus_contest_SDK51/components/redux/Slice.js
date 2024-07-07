import { configureStore, createSlice } from "@reduxjs/toolkit";

// Part1: Define Slice (including reducers and actions)
const initialState = { 
  userName: "XIAN" ,
  busNum:"18" ,
  destination: "（請選擇目的地）",
  goBack:100,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateUserName: (state, action) => {
        state.userName = action.payload;
    },
    setbusInfoBus: (state, action) => {
        state.busNum = action.payload;
    },
    setbusInfoDestination:(state, action) => {
        state.destination = action.payload;
    },
    setgoBack:(state, action) => {
      state.goBack = action.payload;
    }
  },
});


export const selectCounter = (state) => state.counter.userName;
export const { updateUserName } = counterSlice.actions;

export const selectbusNum = (state) => state.counter.busNum;
export const selectDestination = (state) => state.counter.destination;
export const selectGoBack = (state) => state.counter.goBack;
export const {setbusInfoBus, setbusInfoDestination, setgoBack} = counterSlice.actions;

export default counterSlice.reducer;