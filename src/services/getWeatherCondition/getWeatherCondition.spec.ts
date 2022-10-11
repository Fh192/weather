import { getWeatherCondition } from './getWeatherCondition';

describe('getWeatherCondition', () => {
  it('should return "rain" if condition includes "drizzle" or "rain"', () => {
    expect(getWeatherCondition('Patchy rain possible')).toBe('rain');
    expect(getWeatherCondition('drizzle')).toBe('rain');
  });
  it('should return "snow" if condition includes "snow" or "ice"', () => {
    expect(getWeatherCondition('ice')).toBe('snow');
    expect(getWeatherCondition('Light snow')).toBe('snow');
  });
  it('should return "sleet" if condition includes "sleet"', () => {
    expect(getWeatherCondition('sleet')).toBe('sleet');
  });
  it('should return "undefined" if condition does not include "drizzle" or "rain" or "snow" or "ice" or "sleet"', () => {
    expect(getWeatherCondition('')).toBeUndefined();
  });
});
