import React from 'react';
import { useGetWeatherForecastQuery } from '../../api/weatherAPI';
import { useSelector } from '../../hooks/useSelector';
import { Card } from './Card/Card';
import s from './Daily.module.css';

export const Daily: React.FC = () => {
  const { coords } = useSelector((s) => s.weatherParams);
  const { data } = useGetWeatherForecastQuery({ coords });
  const forecast = data?.forecast.forecastday ?? [];

  return (
    <div className={s.daily}>
      <div className={s.cards}>
        {forecast.map((day) => (
          <Card {...day} key={day.date} />
        ))}
      </div>
    </div>
  );
};
