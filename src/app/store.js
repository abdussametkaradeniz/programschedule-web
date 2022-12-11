import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/reducers/counterSlice';
import loginReducer from '../features/login/LoginReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loginProcess: loginReducer,
  },
});
