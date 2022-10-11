import weatherParamsReducer, {
  initialState,
  setCity,
  setCoords,
} from './weatherParamsSlice';

const mockedLocalStorageGetItem = jest.spyOn(Storage.prototype, 'getItem');
jest.spyOn(Storage.prototype, 'setItem');

describe('weatherParamsSlice', () => {
  it('should return initial state', () => {
    const state = weatherParamsReducer(undefined, { type: undefined });

    expect(state).toEqual(initialState());
  });
  it('should return initial state from localStorage', () => {
    mockedLocalStorageGetItem
      .mockReturnValueOnce('Saint Petersburg')
      .mockReturnValueOnce(JSON.stringify({ lat: 0, lon: 0 }));

    const state = weatherParamsReducer(initialState(), { type: undefined });

    expect(state).toEqual({
      city: 'Saint Petersburg',
      coords: { lat: 0, lon: 0 },
    });
  });
  it('should set city with "setCity" action', () => {
    const action = setCity('Saint Petersburg');

    const state = weatherParamsReducer(initialState(), action);

    expect(state.city).toBe(action.payload);
    expect(localStorage.setItem).toHaveBeenCalledWith('city', action.payload);
  });
  it('should set coords with "setCoords" action', () => {
    const action = setCoords({ lat: 0, lon: 0 });

    const state = weatherParamsReducer(initialState(), action);

    expect(state.coords).toEqual(action.payload);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'coords',
      JSON.stringify(action.payload)
    );
  });
});
