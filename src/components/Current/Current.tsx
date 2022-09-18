import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useGetWeatherForecastQuery } from '../../api/weatherAPI';
import geolocation from '../../assets/geolocation.svg';
import humidityIcon from '../../assets/weatherParamIcons/humidity.svg';
import pressureIcon from '../../assets/weatherParamIcons/pressure.svg';
import windIcon from '../../assets/weatherParamIcons/wind.svg';
import { useSelector } from '../../hooks/useSelector';
import { getWeatherBackground } from '../../services/getWeatherBackground';
import { getWeatherCondition } from '../../services/getWeatherCondition';
import { getWeatherIcon } from '../../services/getWeatherIcon';
import { transformTemp } from '../../services/transformTemp';
import { setCity, setCoords } from '../../store/reducers/weatherParamsSlice';
import { Preloader } from '../Preloader/Preloader';
import s from './Current.module.css';
import { Hourly } from './Hourly/Hourly';

export const Current: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { coords } = useSelector(s => s.weatherParams);
  const { data: forecast, isFetching } = useGetWeatherForecastQuery({
    coords,
    days: 1,
  });

  if (!forecast) return null;

  const {
    location: { name, country },
    current: {
      last_updated,
      temp_c,
      condition: { text: condition = 'sleet' },
      feelslike_c,
      is_day,
      wind_kph,
      pressure_mb,
      humidity,
      wind_dir,
    },
  } = forecast;
  const { hour } = forecast.forecast.forecastday[0];
  const date = new Date(last_updated);
  const time = date.toLocaleTimeString('en', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const temp = transformTemp(temp_c);
  const feelsTemp = transformTemp(feelslike_c);
  const wind_mph = (wind_kph / 3.6).toFixed(1);

  const isRain = getWeatherCondition(condition) === 'rain';
  const isSnow = getWeatherCondition(condition) === 'snow';
  const isSleet = getWeatherCondition(condition) === 'sleet';

  const getLocation = () => {
    if (!navigator || !navigator.geolocation) return undefined;

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;

      dispatch(setCoords({ lat: latitude, lon: longitude }));
      dispatch(setCity(name));

      navigate({ search: `?lat=${latitude}&lon=${longitude}` });
    });
  };

  return (
    <div
      className={s.currentWeather}
      style={{ background: getWeatherBackground(condition, is_day) }}
    >
      {!isFetching ? (
        <>
          {(isRain || isSleet) && <div className={s.rain} />}
          {(isSnow || isSleet) && <div className={s.snow} />}
          <div className={s.header}>
            <div className={s.col}>
              <div className={s.title}>
                <span>{`${name}, ${country}`}</span>
              </div>
              <div className={s.time}>
                <span>Now</span>
                <time dateTime={date.toISOString()}>{time}</time>
              </div>
            </div>
            <div className={s.location} onClick={getLocation}>
              <img src={geolocation} alt="your location" />
            </div>
          </div>
          <div className={s.main}>
            <div className={s.tempWrap}>
              <div className={s.temp}>
                <span>{temp}</span>
              </div>
              <div className={s.icon}>
                <img src={getWeatherIcon(condition, is_day)} alt={condition} />
              </div>
              <div className={s.feelings}>
                <div className={s.condition}>
                  <span>{condition}</span>
                </div>
                <div className={s.feels}>
                  <span>{`Feels like ${feelsTemp}`}</span>
                </div>
              </div>
            </div>
            <div className={s.params}>
              <div className={s.param}>
                <img src={windIcon} alt="wind" />
                <span>{`${wind_mph}m/s, ${wind_dir}`}</span>
              </div>
              <div className={s.param}>
                <img src={humidityIcon} alt="humidity" />
                <span>{humidity}%</span>
              </div>
              <div className={s.param}>
                <img src={pressureIcon} alt="pressure" />
                <span>{pressure_mb}hPa</span>
              </div>
            </div>
          </div>
          <div className={s.hourlyWrap}>
            <Hourly hour={hour} />
          </div>
        </>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
