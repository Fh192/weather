import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICoords } from '../../../types';

export interface WeatherParamsState {
  city: string;
  coords: ICoords;
}

export const initialState = (): WeatherParamsState => ({
  city: localStorage.getItem('city') ?? 'moscow',
  coords: JSON.parse(
    localStorage.getItem('coords') ?? '{ "lat": 55.75, "lon": 37.62 }'
  ),
});

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
export default weatherParamsSlice.reducer;
