import React from 'react';
import { getWeatherIcon } from '../../../services/getWeatherIcon';
import { transformTemp } from '../../../services/transformTemp';
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
        <span className={`${s.title} ${s.condition}`}></span>
        <span className={`${s.title} ${s.pressure}`}>Pressure</span>
        <span className={`${s.title} ${s.humidity}`}>Humidity</span>
        <span className={s.title}>Wind</span>
        <span className={`${s.title} ${s.precipitation}`}>Precipitation</span>
        <span className={`${s.title} ${s.windchill}`}>Windchill</span>
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
            windchill_c,
          } = v;
          const hour = new Date(time).getHours();
          const temp = transformTemp(temp_c);
          const wind_mph = (wind_kph / 3.6).toFixed(1);
          const windchill = transformTemp(windchill_c);
          const dayPart =
            hour === 1
              ? 'night'
              : hour === 8
              ? 'morning'
              : hour === 13
              ? 'day'
              : 'evening';

          return (
            <React.Fragment key={time}>
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
              <div className={s.precipitation}>
                <span>{precip_mm}</span>
                <span className={s.unit}>mm</span>
              </div>
              <div className={`${s.windchill} ${s.temp}`}>
                <span>{windchill}</span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
