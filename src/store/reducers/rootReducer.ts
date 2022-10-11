import { combineReducers } from 'redux';
import { weatherAPI } from '../../api/weatherAPI/weatherAPI';
import weatherParamsReducer from './weatherParamsSlice/weatherParamsSlice';

export const rootReducer = combineReducers({
  [weatherAPI.reducerPath]: weatherAPI.reducer,
  weatherParams: weatherParamsReducer,
});
