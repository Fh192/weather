import { IMoonPhase } from '../types';
import newMoon from '../assets/moonPhases/newMoon.svg';
import waningCrescent from '../assets/moonPhases/waningCrescent.svg';
import firstQuarter from '../assets/moonPhases/firstQuarter.svg';
import waxingGibbous from '../assets/moonPhases/waxingGibbous.svg';
import fullMoon from '../assets/moonPhases/fullMoon.svg';
import waningGibbous from '../assets/moonPhases/waningGibbous.svg';
import lastQuarter from '../assets/moonPhases/lastQuarter.svg';
import waxingCrescent from '../assets/moonPhases/waxingCrescent.svg';

export const getMoonIconByPhase = (phase: IMoonPhase) => {
  if (phase === 'New Moon') return newMoon;
  if (phase === 'Waning Crescent') return waningCrescent;
  if (phase === 'First Quarter') return firstQuarter;
  if (phase === 'Waxing Gibbous') return waxingGibbous;
  if (phase === 'Full Moon') return fullMoon;
  if (phase === 'Waning Gibbous') return waningGibbous;
  if (phase === 'Last Quarter') return lastQuarter;
  if (phase === 'Waxing Crescent') return waxingCrescent;
};
