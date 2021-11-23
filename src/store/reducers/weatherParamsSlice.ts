import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICoords } from '../../types';

const initialState = {
  city: localStorage.getItem('city') || 'moscow',
  coords: JSON.parse(
    localStorage.getItem('coords') || '{ "lat": 55.75, "lon": 37.62 }'
  ) as ICoords,
};

export const weatherParamsSlice = createSlice({
  name: 'weatherParams',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
      localStorage.setItem('city', action.payload);
    },
    setCoords: (state, action: PayloadAction<ICoords>) => {
      state.coords = action.payload;
      localStorage.setItem('coords', JSON.stringify(action.payload));
    },
  },
});

export const { setCity, setCoords } = weatherParamsSlice.actions;
