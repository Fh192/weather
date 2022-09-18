export const transformTemp = (temp: number): string => {
  return `${temp > 0 ? '+' : ''}${temp}`;
};
