import React from 'react';
import { getWeatherIcon } from '../../../../services/getWeatherIcon';
import { transformTemp } from '../../../../services/transformTemp';
import { IHour } from '../../../../types';
import s from '../Hourly.module.css';

export const Hour: React.FC<IHour> = ({
  temp_c,
  time,
  condition: { text: condition },
  is_day,
}) => {
  const date = new Date(time);
  const locateTime = date.toLocaleTimeString('ru', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const temp = transformTemp(Number(temp_c.toFixed(0)));

  return (
    <div className={s.hour}>
      <div className={s.time}>
        <time dateTime={date.toISOString()}>{locateTime}</time>
      </div>
      <div className={s.icon}>
        <img src={getWeatherIcon(condition, is_day)} alt={condition} />
      </div>
      <div className={s.temp}>
        <span>{temp}</span>
      </div>
    </div>
  );
};
