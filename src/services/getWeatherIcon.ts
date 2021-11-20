import clearDay from '../assets/weatherIcons/clear-day.svg';
import clearNight from '../assets/weatherIcons/clear-night.svg';
import rain from '../assets/weatherIcons/showers.svg';
import heavyShowers from '../assets/weatherIcons/heavy-showers.svg';
import thunderstormShowers from '../assets/weatherIcons/thunderstorm-showers.svg';
import cloudy from '../assets/weatherIcons/cloudy.svg';
import partlyCloudyDay from '../assets/weatherIcons/partly-cloudy-day.svg';
import partlyCloudyNight from '../assets/weatherIcons/partly-cloudy-night.svg';
import overcastDay from '../assets/weatherIcons/overcastDay.svg';
import overcastNight from '../assets/weatherIcons/overcastDay.svg';
import fogDay from '../assets/weatherIcons/fogDay.svg';
import fogNight from '../assets/weatherIcons/fogNight.svg';
import sleet from '../assets/weatherIcons/sleet.svg';
import heavySleet from '../assets/weatherIcons/heavy-sleet.svg';
import snow from '../assets/weatherIcons/snow.svg';
import heavySnow from '../assets/weatherIcons/heavy-snow.svg';
import thunderstormSnow from '../assets/weatherIcons/thunderstorm-snow.svg';

export const getWeatherIcon = (condition: string, isDay: 0 | 1 = 1) => {
  const c = condition.toLowerCase();

  if (c.includes('sunny')) {
    return clearDay;
  } else if (c.includes('clear')) {
    return clearNight;
  } else if (c.includes('overcast')) {
    if (isDay) {
      return overcastDay;
    }
    return overcastNight;
  } else if (c.includes('mist') || c.includes('fog')) {
    if (isDay) {
      return fogDay;
    } else return fogNight;
  } else if (c.includes('cloudy')) {
    if (c.includes('partly')) {
      if (isDay) {
        return partlyCloudyDay;
      } else return partlyCloudyNight;
    }
    return cloudy;
  } else if (c.includes('rain') || c.includes('drizzle')) {
    if (c.includes('thunder')) return thunderstormShowers;
    if (c.includes('heavy') || c.includes('shower')) {
      return heavyShowers;
    }
    return rain;
  } else if (c.includes('sleet')) {
    if (c.includes('heavy')) return heavySleet;
    return sleet;
  } else if (
    c.includes('snow') ||
    c.includes('blizzard') ||
    c.includes('ice')
  ) {
    if (c.includes('thunder')) return thunderstormSnow;
    if (c.includes('heavy')) return heavySnow;
    return snow;
  }
  return cloudy;
};
