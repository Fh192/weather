import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { useSelector } from '../hooks/useSelector';
import './App.css';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

const App: React.FC = () => {
  const { city } = useSelector(s => s.weatherParams);

  useEffect(() => {
    const location = city.split(',')[0];
    document.title = `Weather in ${
      location.charAt(0).toUpperCase() + location.slice(1)
    }`;
  }, [city]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/forecast" element={<Main />} />
          <Route path="*" element={<Navigate to="/forecast" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
