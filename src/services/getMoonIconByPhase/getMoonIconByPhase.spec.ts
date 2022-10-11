import firstQuarter from '../../assets/moonPhases/firstQuarter.svg';
import fullMoon from '../../assets/moonPhases/fullMoon.svg';
import lastQuarter from '../../assets/moonPhases/lastQuarter.svg';
import newMoon from '../../assets/moonPhases/newMoon.svg';
import waningCrescent from '../../assets/moonPhases/waningCrescent.svg';
import waningGibbous from '../../assets/moonPhases/waningGibbous.svg';
import waxingCrescent from '../../assets/moonPhases/waxingCrescent.svg';
import waxingGibbous from '../../assets/moonPhases/waxingGibbous.svg';
import { getMoonIconByPhase } from './getMoonIconByPhase';

describe('getMoonIconByPhase', () => {
  it('should return "newMoon" if phase is "New Moon"', () => {
    expect(getMoonIconByPhase('New Moon')).toBe(newMoon);
  });
  it('should return "waningCrescent" if phase is "Waning Crescent"', () => {
    expect(getMoonIconByPhase('Waning Crescent')).toBe(waningCrescent);
  });
  it('should return "firstQuarter" if phase is "First Quarter"', () => {
    expect(getMoonIconByPhase('First Quarter')).toBe(firstQuarter);
  });
  it('should return "waxingGibbous" if phase is "NWaxing Gibbous"', () => {
    expect(getMoonIconByPhase('Waxing Gibbous')).toBe(waxingGibbous);
  });
  it('should return "lastQuarter" if phase is "Last Quarter"', () => {
    expect(getMoonIconByPhase('Last Quarter')).toBe(lastQuarter);
  });
  it('should return "lastQuarter" if phase is "Third Quarter"', () => {
    expect(getMoonIconByPhase('Third Quarter')).toBe(lastQuarter);
  });
  it('should return "waxingCrescent" if phase is "Waxing Crescent"', () => {
    expect(getMoonIconByPhase('Waxing Crescent')).toBe(waxingCrescent);
  });
  it('should return "waningGibbous" if phase is "Waning Gibbous"', () => {
    expect(getMoonIconByPhase('Waning Gibbous')).toBe(waningGibbous);
  });
  it('should return "fullMoon" if phase is "Full Moon"', () => {
    expect(getMoonIconByPhase('Full Moon')).toBe(fullMoon);
  });
});
