import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useQuery } from '../../hooks/useQuery';
import { useSelector } from '../../hooks/useSelector';
import { setCity } from '../../store/reducers/weatherParamsSlice';
import { AirQuality } from '../AirQuality/AirQuality';
import { Astronomy } from '../Astronomy/Astronomy';
import { Current } from '../Current/Current';
import { Daily } from '../Daily/Daily';
import s from './Main.module.css';

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { city } = useSelector(s => s.weatherParams);
  const query = useQuery();
  const queryCity = query.get('city');

  useEffect(() => {
    if (queryCity) dispatch(setCity(queryCity));
    navigate({ search: `?city=${queryCity || city}` });
  }, [city, queryCity, navigate, dispatch]);

  return (
    <main className={s.main}>
      <div className={s.row}>
        <Current />
        <div className={s.col}>
          <Astronomy />
          <AirQuality />
        </div>
      </div>
      <Daily />
    </main>
  );
};
