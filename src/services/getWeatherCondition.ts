export const getWeatherCondition = (condition: string) => {
  const c = condition.toLowerCase();

  if (c.includes('rain') || c.includes('drizzle')) {
    return 'snow';
  } else if (c.includes('rain') || c.includes('drizzle')) {
    return 'rain';
  } else if (c.includes('sleet')) return 'sleet';
};
