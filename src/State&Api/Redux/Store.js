import { configureStore } from '@reduxjs/toolkit';
import NieesReducer from './Slice';

export const store = configureStore({
  reducer: {
    Niees: NieesReducer,
  },
});
