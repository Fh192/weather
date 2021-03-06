import React from 'react';
import s from './Astronomy.module.css';
import {
  useGetWeatherForecastQuery,
  useGetAstronomyForecastQuery,
} from '../../api/weatherAPI';
import { useSelector } from '../../hooks/useSelector';
import sun from '../../assets/sun.svg';
import { RootState } from '../../store/store';
import { getMoonIconByPhase } from '../../services/getMoonIconByPhase';

export const Astronomy: React.FC = () => {
  const { coords } = useSelector((s: RootState) => s.weatherParams);
  const { data: forecast } = useGetWeatherForecastQuery({ coords, days: 1 });
  const { data: astronomy } = useGetAstronomyForecastQuery(coords);

  if (!forecast || !astronomy) return null;

  const {
    location: { localtime: dt },
    astronomy: {
      astro: { moon_phase, moonrise, moonset, sunrise, sunset },
    },
  } = astronomy;
  const uv = forecast.forecast.forecastday[0].day.uv;
  const date = new Date(dt).toLocaleDateString('en', {
    weekday: 'short',
    day: 'numeric',
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
            <img src={getMoonIconByPhase(moon_phase)} alt='moon' />
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
