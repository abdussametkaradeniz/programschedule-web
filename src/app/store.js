import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/reducers/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
