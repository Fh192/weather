import { isFoggy, isRainy, isSnowy, isThunder } from './getWeatherIcon';

describe('getWeatherIcon', () => {
  describe('isSnowy', () => {
    it('should return "true" if condition includes "snow" or "blizzard" or "ice"', () => {
      expect(isSnowy('Light snow')).toBeTruthy();
      expect(isSnowy('ice')).toBeTruthy();
      expect(isSnowy('blizzard')).toBeTruthy();
    });
    it('should return "false" if condition does not include "snow" or "blizzard" or "ice"', () => {
      expect(isSnowy('')).toBeFalsy();
    });
  });

  describe('isRainy', () => {
    it('should return "true" if condition includes "rain" or "drizzle"', () => {
      expect(isRainy('Patchy rain possible')).toBeTruthy();
      expect(isRainy('drizzle')).toBeTruthy();
    });
    it('should return "false" if condition does not include "rain" or "drizzle"', () => {
      expect(isRainy('')).toBeFalsy();
    });
  });

  describe('isFoggy', () => {
    it('should return "true" if condition includes "mist" or "fog"', () => {
      expect(isFoggy('mist')).toBeTruthy();
      expect(isFoggy('fog')).toBeTruthy();
    });
    it('should return "false" if condition does not include "mist" or "fog"', () => {
      expect(isFoggy('')).toBeFalsy();
    });
  });

  describe('isThunder', () => {
    it('should return "true" if condition includes "thunder"', () => {
      expect(isThunder('thunder')).toBeTruthy();
    });
    it('should return "false" if condition does not include "thunder"', () => {
      expect(isThunder('')).toBeFalsy();
    });
  });
});
