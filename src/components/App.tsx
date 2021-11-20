import React from 'react';
import './App.css';
import { Current } from './Current/Current';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='container'>
        <Current />
      </div>
    </div>
  );
};

export default App;
