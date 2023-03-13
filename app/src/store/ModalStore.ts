import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modules/modalSlice';

// store정의
export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});