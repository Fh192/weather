import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IAstronomyResponse,
  ICoords,
  IForecastDays,
  IForecastResponse,
  ISearch,
} from '../types';

const API_KEY = 'a343e898437e4e44bc3101151211811';

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherapi.com/v1/' }),
  endpoints: b => ({
    getWeatherForecast: b.query<
      IForecastResponse,
      { coords: ICoords; days?: IForecastDays }
    >({
      query: ({ coords, days = 3 }) =>
        `forecast.json?key=${API_KEY}&q=${`${coords.lat} ${coords.lon}`}&days=${days}&aqi=yes`,
    }),
    getAstronomyForecast: b.query<IAstronomyResponse, ICoords>({
      query: coords =>
        `astronomy.json?key=${API_KEY}&q=${`${coords.lat} ${coords.lon}`}`,
    }),
    search: b.query<ISearch[], string>({
      query: location => `search.json?key=${API_KEY}&q=${location}`,
    }),
  }),
});

export const {
  useGetWeatherForecastQuery,
  useSearchQuery,
  useGetAstronomyForecastQuery,
} = weatherAPI;
