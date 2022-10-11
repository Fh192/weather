import { getDayPart } from './getDayPart';

describe('getDayPart', () => {
  it('should return "evening" by default', () => {
    expect(getDayPart(18)).toBe('evening');
  });
  it('should return "night" if the hour is "1"', () => {
    expect(getDayPart(1)).toBe('night');
  });
  it('should return "morning" if the hour is "8"', () => {
    expect(getDayPart(8)).toBe('morning');
  });
  it('should return "day" if the hour is "13"', () => {
    expect(getDayPart(13)).toBe('day');
  });
});
