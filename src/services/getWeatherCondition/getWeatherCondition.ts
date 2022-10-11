export const getWeatherCondition = (condition: string) => {
  const c = condition.toLowerCase();

  if (c.includes('rain') || c.includes('drizzle')) {
    return 'rain';
  } else if (c.includes('snow') || c.includes('ice')) {
    return 'snow';
  } else if (c.includes('sleet')) return 'sleet';

  return undefined;
};
