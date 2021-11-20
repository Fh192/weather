import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export const weatherParamsSlice = createSlice({
  name: 'weatherParams',
  initialState: {
    city: 'astrakhan',
  },
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { setCity } = weatherParamsSlice.actions;
