export const getWeatherBackground = (
  condition: string,
  isDay: 0 | 1 = 1
): string => {
  const c = condition.toLowerCase();
  let gradient = 'to bottom, #162a62, #16315f';

  if (c.includes('sunny')) {
    gradient = 'to bottom, #4c90f4, #3e9eee';
  } else if (c.includes('clear')) {
    gradient = 'to bottom, #2e4686, #375382';
  } else if (isDay) {
    gradient = 'to bottom, #4a72ac, #438dcb';
  }

  return `linear-gradient(${gradient})`;
};
