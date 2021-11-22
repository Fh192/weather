import React from 'react';
import { getWeatherIcon } from '../../../services/getWeatherIcon';
import { IForecast } from '../../../types';
import s from './Card.module.css';

export const Card: React.FC<IForecast> = ({ date: dt, hour }) => {
  const date = new Date(dt);
  const day = date.getDate();
  const weekday = date.toLocaleDateString('en', { weekday: 'long' });
  const month = date.toLocaleDateString('en', { month: 'long' });

  const dayParts = hour.filter(v => {
    const hour = new Date(v.time).getHours();
    return hour === 1 || hour === 8 || hour === 13 || hour === 18;
  });

  return (
    <div className={s.card}>
      <div className={s.header}>
        <div className={s.date}>
          <div className={s.day}>
            <span>{day}</span>
          </div>
          <div className={s.weekdayMonth}>
            <span>{month},</span>
            <span>{weekday}</span>
          </div>
        </div>
      </div>

      <div className={s.main}>
        <span></span>
        <span></span>
        <span></span>
        <span className={s.title}>Pressure</span>
        <span className={s.title}>Humidity</span>
        <span className={s.title}>Wind</span>
        <span className={s.title}>Precipitation</span>
        <span className={s.title}>
          Precipitation <br /> chance
        </span>
        {dayParts.map(v => {
          const {
            is_day,
            condition: { text: condition },
            time,
            temp_c,
            wind_kph,
            humidity,
            pressure_mb,
            precip_mm,
            chance_of_rain,
            chance_of_snow,
          } = v;
          const hour = new Date(time).getHours();
          const temp = `${temp_c > 0 ? '+' : ''}${temp_c}`;
          const wind_mph = (wind_kph / 3.6).toFixed(1);
          const precipChance = Math.max(chance_of_rain, chance_of_snow);

          const dayPart =
            hour === 1
              ? 'night'
              : hour === 8
              ? 'morning'
              : hour === 13
              ? 'day'
              : 'evening';

          return (
            <>
              <div className={s.tempWrap}>
                <div className={s.dayPart}>{dayPart}</div>
                <div className={s.temp}>
                  <span>{temp}</span>
                </div>
              </div>

              <div className={s.icon}>
                <img src={getWeatherIcon(condition, is_day)} alt={condition} />
              </div>
              <div className={s.condition}>
                <span>{condition}</span>
              </div>
              <div className={s.pressure}>
                <span>{pressure_mb}</span>
                <span className={s.unit}>mb</span>
              </div>
              <div className={s.humidity}>
                <span>{humidity}</span>
                <span className={s.unit}>%</span>
              </div>
              <div className={s.wind}>
                <span>{wind_mph}</span>
                <span className={s.unit}>m/s</span>
              </div>
              <div>
                <span>{precip_mm}</span>
                <span className={s.unit}>mm</span>
              </div>
              <div>
                <span>{precipChance}</span>
                <span className={s.unit}>%</span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
