import { DayPart } from '../../types';

export const getDayPart = (hour: number): DayPart => {
  if (hour === 1) return 'night';
  if (hour === 8) return 'morning';
  if (hour === 13) return 'day';
  return 'evening';
};
