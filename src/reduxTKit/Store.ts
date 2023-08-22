import {configureStore} from '@reduxjs/toolkit';
import RegisterSlice from './features/AuthSlices/RegisterSlice';

export const Store = configureStore({
  reducer: {
    Register: RegisterSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
