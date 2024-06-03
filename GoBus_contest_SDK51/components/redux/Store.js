import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slice';

// Part2: Combine Reducers and Create a Store
const store = configureStore({
   reducer: {
     counter: counterReducer
   },
   devTools: process.env.NODE_ENV !== 'production',
 });

//  export store to global
export default store;