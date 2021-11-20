import React from 'react';
import { useGetWeatherForecastQuery } from '../../api/weatherAPI';
import { useSelector } from '../../hooks/useSelector';
import s from './AirQuality.module.css';

export const AirQuality: React.FC = () => {
  const { city } = useSelector(s => s.weatherParams);
  const { data: forecast } = useGetWeatherForecastQuery({ city, days: 1 });

  if (!forecast) return null;

  const { last_updated, air_quality } = forecast.current;
  const { o3, co, no2, so2 } = air_quality;

  const date = new Date(last_updated).toLocaleDateString('en', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  });

  const US_EPA_Index = air_quality['us-epa-index'];
  const US_EPA_Category =
    US_EPA_Index === 1
      ? 'Good'
      : US_EPA_Index === 2
      ? 'Moderate'
      : US_EPA_Index === 3
      ? 'Unhealthy'
      : US_EPA_Index === 4
      ? 'Unhealthy'
      : US_EPA_Index === 5
      ? 'Very Unhealthy'
      : 'Hazardous';

  return (
    <div className={s.airQuality}>
      <div className={s.header}>
        <div className={s.title}>
          <span>Air Quality</span>
        </div>
        <div className={s.date}>
          <span>{date}</span>
        </div>
      </div>
      <div className={s.main}>
        <div className={s.US_EPA}>
          <span>US-EPA index — {US_EPA_Index}</span>
          <span>
            Air quality is&nbsp;
            <span className={s.US_EPA_Category}>{US_EPA_Category}</span>
          </span>
        </div>
        <div className={s.params}>
          <div className={s.param} title='Ozon'>
            <span>
              O<sub>3</sub>
            </span>
            <span>{`${o3.toFixed(1)} (μg/m3)`}</span>
          </div>
          <div className={s.param} title='Nitric oxide'>
            <span>
              NO<sub>2</sub>
            </span>
            <span>{`${no2.toFixed(1)} (μg/m3)`}</span>
          </div>
          <div className={s.param} title='Carbon monoxide'>
            <span>CO</span>
            <span>{`${co.toFixed(1)} (μg/m3)`}</span>
          </div>
          <div className={s.param} title='Sulfur oxide'>
            <span>
              SO<sub>2</sub>
            </span>
            <span>{`${so2.toFixed(1)} (μg/m3)`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
