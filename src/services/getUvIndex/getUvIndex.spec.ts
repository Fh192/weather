import { getUvIndex } from './getUvIndex';

describe('getUvIndex', () => {
  it('should return "Very hight" if uv greater than 9', () => {
    expect(getUvIndex(10)).toBe('Very hight');
  });
  it('should return "Very hight" if uv equal to 9', () => {
    expect(getUvIndex(9)).toBe('Very hight');
  });
  it('should return "Hight" if uv greater than 6 and lower than 9', () => {
    expect(getUvIndex(7)).toBe('Hight');
  });
  it('should return "Hight" if uv equal to 6', () => {
    expect(getUvIndex(6)).toBe('Hight');
  });
  it('should return "Moderate" if uv greater than 3 and lower than 6', () => {
    expect(getUvIndex(4)).toBe('Moderate');
  });
  it('should return "Moderate" if uv equal to 3', () => {
    expect(getUvIndex(3)).toBe('Moderate');
  });
  it('should return "Low" if uv lower than 3', () => {
    expect(getUvIndex(2)).toBe('Low');
  });
});
