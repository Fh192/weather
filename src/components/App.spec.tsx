import { initialState } from '../store/reducers/weatherParamsSlice/weatherParamsSlice';
import { renderWithWrappers } from '../tests/helpers';
import App from './App';

describe('App.tsx', () => {
  it('should set city from store to document title', () => {
    const weatherParams = { ...initialState(), city: 'Saint Petersburg' };

    renderWithWrappers(<App />, { weatherParams });

    expect(document.title).toBe('Weather in Saint Petersburg');
  });
});
