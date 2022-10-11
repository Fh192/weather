import { getWeatherBackground } from './getWeatherBackground';

describe('getWeatherBackground', () => {
  it('should return "linear-gradient(to bottom, #4c90f4, #3e9eee)" if condition includes "sunny"', () => {
    expect(getWeatherBackground('sunny')).toBe(
      'linear-gradient(to bottom, #4c90f4, #3e9eee)'
    );
  });
  it('should return "linear-gradient(to bottom, #2e4686, #375382)" if condition includes "clear"', () => {
    expect(getWeatherBackground('clear')).toBe(
      'linear-gradient(to bottom, #2e4686, #375382)'
    );
  });
  it('should return "linear-gradient(to bottom, #4a72ac, #438dcb)" if condition does not include "clear" or "sunny" and it is day', () => {
    expect(getWeatherBackground('', 1)).toBe(
      'linear-gradient(to bottom, #4a72ac, #438dcb)'
    );
  });
  it('should return "linear-gradient(to bottom, #162a62, #16315f)" if condition does not include "clear" or "sunny" and it is not day', () => {
    expect(getWeatherBackground('', 0)).toBe(
      'linear-gradient(to bottom, #162a62, #16315f)'
    );
  });
});
