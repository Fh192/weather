import { combineReducers } from 'redux';
import { weatherAPI } from '../../api/weatherAPI';
import { weatherParamsSlice } from './weatherParamsSlice';

export const rootReducer = combineReducers({
  [weatherAPI.reducerPath]: weatherAPI.reducer,
  weatherParams: weatherParamsSlice.reducer,
});
