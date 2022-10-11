import {
  initialState,
  WeatherParamsState,
} from '../../store/reducers/weatherParamsSlice/weatherParamsSlice';
import { renderWithWrappers } from '../../tests/helpers';
import { ICoords } from '../../types';
import { Main } from './Main';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Main.tsx', () => {
  it('sets coords from store to query string', () => {
    const coords: ICoords = { lat: 0, lon: 0 };
    const weatherParams: WeatherParamsState = {
      ...initialState(),
      coords,
    };

    renderWithWrappers(<Main />, { weatherParams });

    expect(mockedUsedNavigate).toHaveBeenCalledWith({
      search: `?lat=${coords.lat}&lon=${coords.lon}`,
    });
  });
});
