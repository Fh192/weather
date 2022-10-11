import clearDay from '../../assets/weatherIcons/clear-day.svg';
import clearNight from '../../assets/weatherIcons/clear-night.svg';
import cloudy from '../../assets/weatherIcons/cloudy.svg';
import fogDay from '../../assets/weatherIcons/fogDay.svg';
import fogNight from '../../assets/weatherIcons/fogNight.svg';
import heavyShowers from '../../assets/weatherIcons/heavy-showers.svg';
import heavySleet from '../../assets/weatherIcons/heavy-sleet.svg';
import heavySnow from '../../assets/weatherIcons/heavy-snow.svg';
import {
  default as overcastDay,
  default as overcastNight,
} from '../../assets/weatherIcons/overcastDay.svg';
import partlyCloudyDay from '../../assets/weatherIcons/partly-cloudy-day.svg';
import partlyCloudyNight from '../../assets/weatherIcons/partly-cloudy-night.svg';
import rain from '../../assets/weatherIcons/showers.svg';
import sleet from '../../assets/weatherIcons/sleet.svg';
import snow from '../../assets/weatherIcons/snow.svg';
import thunderstormShowers from '../../assets/weatherIcons/thunderstorm-showers.svg';
import thunderstormSnow from '../../assets/weatherIcons/thunderstorm-snow.svg';

export const isSnowy = (condition: string) => {
  return (
    condition.includes('snow') ||
    condition.includes('blizzard') ||
    condition.includes('ice')
  );
};

export const isRainy = (condition: string): boolean => {
  return condition.includes('rain') || condition.includes('drizzle');
};

export const isFoggy = (condition: string): boolean => {
  return condition.includes('mist') || condition.includes('fog');
};

export const isHeavy = (
  condition: string,
  precipitation: string = ''
): boolean => {
  return condition.includes('heavy') && condition.includes(precipitation);
};

export const isThunder = (condition: string): boolean => {
  return condition.includes('thunder');
};

export const getWeatherIcon = (
  weatherCondition: string,
  isDay: 0 | 1 = 1
): string => {
  const condition = weatherCondition.toLowerCase();

  if (condition.includes('sunny')) return clearDay;

  if (condition.includes('clear')) return clearNight;

  if (isFoggy(condition)) return isDay ? fogDay : fogNight;

  if (condition.includes('overcast')) {
    return isDay ? overcastDay : overcastNight;
  }

  if (condition.includes('cloudy')) {
    if (!condition.includes('partly')) return cloudy;
    return isDay ? partlyCloudyDay : partlyCloudyNight;
  }

  if (isRainy(condition)) {
    if (isThunder(condition)) return thunderstormShowers;
    if (isHeavy(condition) || condition.includes('shower')) return heavyShowers;
    return rain;
  }

  if (condition.includes('sleet')) {
    if (isHeavy(condition)) return heavySleet;
    return sleet;
  }

  if (isSnowy(condition)) {
    if (isThunder(condition)) return thunderstormSnow;
    if (isHeavy(condition)) return heavySnow;
    return snow;
  }

  return cloudy;
};
