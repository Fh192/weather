import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useQuery } from '../../hooks/useQuery';
import { useSelector } from '../../hooks/useSelector';
import { setCoords } from '../../store/reducers/weatherParamsSlice';
import { AirQuality } from '../AirQuality/AirQuality';
import { Astronomy } from '../Astronomy/Astronomy';
import { Current } from '../Current/Current';
import { Daily } from '../Daily/Daily';
import s from './Main.module.css';

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useQuery();
  const { coords } = useSelector(s => s.weatherParams);
  const lat = Number(query.get('lat')) || coords.lat;
  const lon = Number(query.get('lon')) || coords.lon;

  useEffect(() => {
    dispatch(setCoords({ lat, lon }));
    setCoords({ lat, lon });
    navigate({ search: `?lat=${lat}&lon=${lon}` });
  }, [lat, lon, navigate, dispatch]);

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
