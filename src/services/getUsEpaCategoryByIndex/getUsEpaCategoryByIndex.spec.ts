import { getUsEpaCategoryByIndex } from './getUsEpaCategoryByIndex';

describe('getUsEpaCategoryByIndex', () => {
  it('should return "Good" if index equal to "1"', () => {
    expect(getUsEpaCategoryByIndex(1)).toBe('Good');
  });
  it('should return "Moderate" if index equal to "2"', () => {
    expect(getUsEpaCategoryByIndex(2)).toBe('Moderate');
  });
  it('should return "Unhealthy" if index equal to "3" od "4"', () => {
    expect(getUsEpaCategoryByIndex(3)).toBe('Unhealthy');
    expect(getUsEpaCategoryByIndex(4)).toBe('Unhealthy');
  });
  it('should return "Very Unhealthy" if index equal to "5"', () => {
    expect(getUsEpaCategoryByIndex(5)).toBe('Very Unhealthy');
  });
  it('should return "Hazardous" if index equal to "6"', () => {
    expect(getUsEpaCategoryByIndex(6)).toBe('Hazardous');
  });
});
