import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import type { ISeat } from '../components/Seat';
import { generateSeats, loadData } from './utils';

const initialState: ISeatPickerState = {
  status: 'idle',
  step: 'start',
  roomData: undefined,
  amount: 0,
  adjacent: true,
  selected: undefined,
};

export const fetchRoomData = createAsyncThunk(
  'seatAmount/fetchRoom',
  async (amount: number) => {
    const data = await loadData();
    // The value we return becomes the `fulfilled` action payload
    return { data, amount };
  }
);

export const seatAmountSlice = createSlice({
  name: 'seatAmount',
  initialState,
  reducers: {
    setSeatAmount: (state, action: PayloadAction<number>) => {
      return { ...state, amount: action.payload };
    },
    setAdjacent: (state, action: PayloadAction<boolean>) => {
      return { ...state, adjacent: action.payload };
    },
    setStep: (state, action: PayloadAction<ISeatPickerState['step']>) => {
      return { ...state, step: action.payload };
    },
    toggleSeat: (state, action: PayloadAction<ISeat>) => {
      // button should be disabled but in case some hackers mess with attributes
      // if the seat is reserved, don't change state
      if (action.payload.reserved) return state;

      if (state.selected) {
        const index = state.selected
          .map((e) => e.id)
          .indexOf(action.payload.id);
        let outcome = [...state.selected];
        if (index >= 0) {
          outcome.splice(index, 1);
          return { ...state, selected: [...outcome], amount: outcome.length };
        } else {
          return {
            ...state,
            selected: [...state.selected, action.payload],
            amount: state.amount + 1,
          };
        }
      }

      // by default selected is undefined, add payload seat to selected
      return { ...state, selected: [action.payload], amount: 1 };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomData.pending, (state) => {
        return { ...state, status: 'loading' };
      })
      .addCase(fetchRoomData.fulfilled, (state, action) => {
        const availableSeats = action.payload.data.filter((s) => !s.reserved);

        const generatedSeats = generateSeats(
          availableSeats,
          action.payload.amount,
          state.adjacent
        );

        return {
          ...state,
          status: 'idle',
          step: 'confirm',
          selected: generatedSeats,
          roomData: action.payload.data,
        };
      });
  },
});

export const { setStep, setSeatAmount, setAdjacent, toggleSeat } =
  seatAmountSlice.actions;

export const selectSeatAmount = (state: RootState) => state.seatAmount.amount;
export const selectAdjacent = (state: RootState) => state.seatAmount.adjacent;
export const selectRoomData = (state: RootState) => state.seatAmount.roomData;
export const selectSelected = (state: RootState) => state.seatAmount.selected;
export const selectStep = (state: RootState) => state.seatAmount.step;
export const selectStatus = (state: RootState) => state.seatAmount.status;
export default seatAmountSlice.reducer;

export interface ISeatPickerState {
  status: 'idle' | 'loading';
  step: 'start' | 'confirm' | 'summary';
  roomData?: ISeat[];
  amount: number;
  adjacent: boolean;
  selected?: ISeat[];
}
