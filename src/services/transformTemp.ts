export const transformTemp = (temp: number) => {
  return `${temp > 0 ? '+' : ''}${temp}`;
};
