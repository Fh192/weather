import { IDay, UvIndex } from '../types';

export const getUvIndex = (uv: IDay['uv']): UvIndex => {
  if (uv >= 9) return 'Very hight';
  if (uv >= 6) return 'Hight';
  if (uv >= 3) return 'Moderate';
  return 'Low';
};
