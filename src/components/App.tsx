import React, { useEffect } from 'react';
import { useSelector } from '../hooks/useSelector';
import { AirQuality } from './AirQuality/AirQuality';
import './App.css';
import { Astronomy } from './Astronomy/Astronomy';
import { Current } from './Current/Current';
import { Daily } from './Daily/Daily';
import { Header } from './Header/Header';

const App: React.FC = () => {
  const { city } = useSelector(s => s.weatherParams);

  useEffect(() => {
    document.title = `Weather in ${
      city.charAt(0).toUpperCase() + city.slice(1)
    }`;
  }, [city]);

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <div className='row'>
          <Current />
          <div className='col'>
            <Astronomy />
            <AirQuality />
          </div>
        </div>
        <Daily />
      </div>
    </div>
  );
};

export default App;
