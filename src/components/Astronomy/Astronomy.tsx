import React from 'react';
import s from './Astronomy.module.css';
import { useGetWeatherForecastQuery } from '../../api/weatherAPI';
import { useSelector } from '../../hooks/useSelector';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

export const Astronomy: React.FC = () => {
  const { city } = useSelector(s => s.weatherParams);
  const { data: forecast } = useGetWeatherForecastQuery({ city, days: 1 });
  if (!forecast) return null;
  const {
    astro: {
      moon_illumination,
      moon_phase,
      moonrise,
      moonset,
      sunrise,
      sunset,
    },
    date: dt,
    day: { uv },
  } = forecast.forecast.forecastday[0];
  const date = new Date(dt).toLocaleDateString('en', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  });

  const uvIndex =
    uv >= 9 ? 'Very hight' : uv >= 6 ? 'Hight' : uv >= 3 ? 'Moderate' : 'Low';

  return (
    <div className={s.astronomy}>
      <div className={s.header}>
        <div className={s.title}>
          <span>Sun and Moon</span>
        </div>
        <div className={s.date}>
          <span>{date}</span>
        </div>
      </div>

      <div className={s.main}>
        <div className={s.sun}>
          <div className={s.icon}>
            <img src={sun} alt='sun' />
          </div>
          <div className={s.info}>
            <div>
              <span>{`Rise — ${sunrise}`}</span>
            </div>
            <div>
              <span>{`Set — ${sunset}`}</span>
            </div>
            <div>
              <span>{`${uvIndex} UV index`}</span>
            </div>
          </div>
        </div>
        <div className={s.moon}>
          <div className={s.icon}>
            <img src={moon} alt='moon' />
            <div className={s.moonIllumination}>
              <span>{`${moon_illumination}%`}</span>
            </div>
            <div
              className={s.borderMoon}
              style={{ left: `${moon_illumination}%` }}
            />
          </div>
          <div className={s.info}>
            <div>
              <span>{`Rise — ${moonrise}`}</span>
            </div>
            <div>
              <span>{`Set — ${moonset}`}</span>
            </div>
            <div>
              <span>{moon_phase}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};