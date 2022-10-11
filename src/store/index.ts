import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { weatherAPI } from '../api/weatherAPI/weatherAPI';
import { rootReducer } from './reducers/rootReducer';

export const createStore = (preloadedState?: RootPreloadedState) => {
  return configureStore({
    preloadedState,
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(weatherAPI.middleware),
  });
};

export type RootStore = ReturnType<typeof createStore>;
export type RootDispatch = RootStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
export type RootPreloadedState = PreloadedState<RootState>;
