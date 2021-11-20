import React from 'react';
import { AirQuality } from './AirQuality/AirQuality';
import './App.css';
import { Astronomy } from './Astronomy/Astronomy';
import { Current } from './Current/Current';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <Current />
          <div className='col'>
            <Astronomy />
            <AirQuality />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
