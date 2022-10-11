import firstQuarter from '../../assets/moonPhases/firstQuarter.svg';
import fullMoon from '../../assets/moonPhases/fullMoon.svg';
import lastQuarter from '../../assets/moonPhases/lastQuarter.svg';
import newMoon from '../../assets/moonPhases/newMoon.svg';
import waningCrescent from '../../assets/moonPhases/waningCrescent.svg';
import waningGibbous from '../../assets/moonPhases/waningGibbous.svg';
import waxingCrescent from '../../assets/moonPhases/waxingCrescent.svg';
import waxingGibbous from '../../assets/moonPhases/waxingGibbous.svg';
import { IMoonPhase } from '../../types';

export const getMoonIconByPhase = (phase: IMoonPhase): string => {
  switch (phase) {
    case 'New Moon':
      return newMoon;
    case 'Waning Crescent':
      return waningCrescent;
    case 'First Quarter':
      return firstQuarter;
    case 'Waxing Gibbous':
      return waxingGibbous;
    case 'Full Moon':
      return fullMoon;
    case 'Waning Gibbous':
      return waningGibbous;
    case 'Last Quarter':
    case 'Third Quarter':
      return lastQuarter;
    case 'Waxing Crescent':
      return waxingCrescent;
    default:
      return newMoon;
  }
};
