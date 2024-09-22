import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/slice/auth.jsx';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
