import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import seatAmountReducer from './seatPickerSlice';

export const store = configureStore({
  reducer: {
    seatAmount: seatAmountReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
