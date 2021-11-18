import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IForecastDays,
  IForecastResponse,
  ISearch,
  IWeatherResponse,
} from '../types';

const API_KEY = 'a343e898437e4e44bc3101151211811';

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherapi.com/v1/' }),
  endpoints: b => ({
    getCurrentWeather: b.query<IWeatherResponse, string>({
      query: city => `current.json?key=${API_KEY}&q=${city}&aqi=yes`,
    }),
    getWeatherForecast: b.query<
      IForecastResponse,
      { city: string; days?: IForecastDays }
    >({
      query: ({ city, days = 3 }) =>
        `forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=yes`,
    }),
    search: b.query<ISearch[], string>({
      query: city => `search.json?key=${API_KEY}&q=${city}`,
    }),
  }),
});

export const {
  useGetCurrentWeatherQuery,
  useGetWeatherForecastQuery,
  useSearchQuery,
} = weatherAPI;
