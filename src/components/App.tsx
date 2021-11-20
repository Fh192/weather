import React from 'react';
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
            <div className='a'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
